import { gql } from 'apollo-boost'

import client from '../client'
import { storeToken } from '../utils'

const _MutationLogIn = (email, loginPassword) => {
  const loginUser = (email, loginPassword) => gql`
    mutation {
      loginUser(data: {email: ${JSON.stringify(email)}, loginPassword: ${JSON.stringify(
    loginPassword,
  )}}) {
        token
        user {
          id
          name
          email
        }
      }
    }
  `

  client
    .mutate({
      mutation: loginUser(email, loginPassword),
    })
    .then(response => {
      storeToken(response.data.loginUser.token)
    })
}

export { _MutationLogIn }
