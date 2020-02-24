import { gql } from 'apollo-boost'

import client from '../client'
import { storeToken } from '../utils'

const _MutateCreatePost = (name, email, loginPassword) => {
  const createPost = (title, body, published, author) => gql`
  mutation {
    createUser(data: { name: ${JSON.stringify(name)}, email: ${JSON.stringify(
    email,
  )}, loginPassword: ${JSON.stringify(loginPassword)} }) {
      user {
        name
        email
      }
      token
    }
  }
`

  client
    .mutate({
      mutation: createUser(name, email, loginPassword),
    })
    .then(response => {
      storeToken('token', response.data.createUser.token)
    })
    .catch(response => {
      console.log(response)
    })
}

const _QueryUsers = func => {
  const getUsers = gql`
    query {
      users {
        id
        name
      }
    }
  `

  client
    .query({
      query: getUsers,
    })
    .then(response => {
      func(response.data.users)
    })
}
