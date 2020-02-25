import { gql } from 'apollo-boost'

import client from '../client'

const _MutateCreateUser = (name, email, password, func) => {
  const createUser = (name, email, password) => gql`
  mutation {
    createUser( data: { name: ${JSON.stringify(name)}, email: ${JSON.stringify(
    email,
  )}, password: ${JSON.stringify(password)}}) {
      user {
        id
        name
        email
      }
      token
    }
  }
`

  client
    .mutate({
      mutation: createUser(name, email, password),
    })
    .then(response => {
      localStorage.setItem('token', JSON.stringify(response.data.createUser.token))
      func(response.data.createUser.user)
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
