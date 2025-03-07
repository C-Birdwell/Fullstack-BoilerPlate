import bcrypt from 'bcryptjs'
import getUserId from '../utils/getUserId'
import generateToken from '../utils/generateToken'
import hashPassword from '../utils/hashPassword'

const Mutation = {
  async createUser(parent, { data }, { prisma }, info) {
    const password = await hashPassword(data.password)

    const user = await prisma.mutation.createUser({
      data: {
        ...data,
        password,
      },
    })
    const token = generateToken(user.id)

    return {
      user,
      token,
    }
  },

  async deleteUser(parent, args, { prisma, request }, info) {
    const userId = getUserId(request)

    return prisma.mutation.deleteUser(
      {
        where: {
          id: userId,
        },
      },
      info,
    )
  },

  async login(parent, args, { prisma }, info) {
    const user = await prisma.query.user({
      where: {
        email: args.data.email,
      },
    })

    if (!user) {
      throw new Error('Unable to login')
    }
    const token = generateToken(user.id)

    const isMatch = await bcrypt.compare(args.data.password, user.password)

    if (!isMatch) {
      throw new Error('Unable to login')
    }

    return {
      user,
      token,
    }
  },

  async updateUser(parent, args, { prisma, request }, info) {
    const userId = getUserId(request)

    if (typeof args.data.password === 'string') {
      args.data.password = await hashPassword(args.data.password)
    }

    return prisma.mutation.updateUser(
      {
        where: {
          id: userId,
        },
        data: args.data,
      },
      info,
    )
  },

  createPost(parent, args, { prisma, request }, info) {
    const userId = getUserId(request)

    return prisma.mutation.createPost(
      {
        data: {
          title: args.data.title,
          body: args.data.body,
          published: args.data.published,
          author: {
            connect: {
              id: userId,
            },
          },
        },
      },
      info,
    )
  },

  async deletePost(parent, args, { prisma, request }, info) {
    const userId = getUserId(request)
    const postExists = await prisma.exists.Post({
      id: args.id,
      author: {
        id: userId,
      },
    })

    if (!postExists) {
      throw new Error('Unable to delete post')
    }

    return prisma.mutation.deletePost(
      {
        where: {
          id: args.id,
        },
      },
      info,
    )
  },

  async updatePost(parent, args, { prisma, request }, info) {
    const userId = getUserId(request)
    const postExists = await prisma.exists.Post({
      id: args.id,
      author: {
        id: userId,
      },
    })
    const isPublished = await prisma.exists.Post({ id: args.id, published: true })

    if (!postExists) {
      throw new Error('Unable to update post')
    }

    // if (isPublished && args.data.published === false) {
    //   await prisma.mutation.deleteManyComments({ where: { post: { id: args.id } } })
    // }

    return prisma.mutation.updatePost(
      {
        where: {
          id: args.id,
        },
        data: args.data,
      },
      info,
    )
  },
}

export { Mutation as default }
