import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prisma from '../../src/prisma'

const userOne = {
  input: {
    name: 'Cerebella',
    email: 'Cerebella@example.com',
    loginPassword: bcrypt.hashSync('D1@mond123'),
  },
  user: undefined,
  jwt: undefined,
}

const userTwo = {
  input: {
    name: 'Colgrin',
    email: 'Cosdlin@example.com',
    loginPassword: bcrypt.hashSync('Hobg@blins123'),
  },
  user: undefined,
  jwt: undefined,
}

const seedDatabase = async () => {
  // Delete test data
  await prisma.mutation.deleteManyUsers()

  // Create user one
  userOne.user = await prisma.mutation.createUser({
    data: userOne.input,
  })
  userOne.jwt = jwt.sign({ userId: userOne.user.id }, process.env.JWT_TOKEN)

  // Create user two
  userTwo.user = await prisma.mutation.createUser({
    data: userTwo.input,
  })
  userTwo.jwt = jwt.sign({ userId: userTwo.user.id }, process.env.JWT_TOKEN)
}

export { seedDatabase as default, userOne, userTwo }
