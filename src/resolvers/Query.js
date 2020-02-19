import getUserId from '../utils/getUserId'

const Query = {
  users(parent, { first, skip, after, orderBy, query }, { prisma }, info) {
    const opArgs = {
      first,
      skip,
      after,
      orderBy,
    }

    if (query) {
      opArgs.where = {
        OR: [
          {
            name_contains: query,
          },
        ],
      }
    }

    return prisma.query.users(opArgs, info)
  },

  me(parent, args, { prisma, request }, info) {
    const userId = getUserId(request)

    return prisma.query.user({
      where: {
        id: userId,
      },
    })
  },

  myPosts(parent, { first, skip, after, orderBy, query }, { prisma, request }, info) {
    const userId = getUserId(request)
    const opArgs = {
      first: first,
      skip: skip,
      after: after,
      orderBy: orderBy,
      where: {
        author: {
          id: userId,
        },
      },
    }

    if (query) {
      opArgs.where.OR = [
        {
          title_contains: query,
        },
        {
          body_contains: query,
        },
      ]
    }

    return prisma.query.posts(opArgs, info)
  },

  posts(parent, { first, skip, after, orderBy, query }, { prisma }, info) {
    const opArgs = {
      first: first,
      skip: skip,
      after: after,
      orderBy: orderBy,
      where: {
        published: true,
      },
    }

    if (query) {
      opArgs.where.OR = [
        {
          title_contains: query,
        },
        {
          body_contains: query,
        },
      ]
    }

    return prisma.query.posts(opArgs, info)
  },
}

export { Query as default }
