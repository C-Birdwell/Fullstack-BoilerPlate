import { gql } from 'apollo-boost'

import client from '../client'
import { storeToken } from '../utils'

const _MutateCreateUser = (name, email, loginPassword) => {
  const createUser = (name, email, loginPassword) => gql`
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
      localStorage.setItem('token', response.data.createUser.token)
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

export { _QueryUsers, _MutateCreateUser }
