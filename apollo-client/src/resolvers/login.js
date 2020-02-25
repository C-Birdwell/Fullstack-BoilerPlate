import { gql } from 'apollo-boost'

import client from '../client'

const _MutationLogIn = (email, password, func) => {
  const loginUser = (email, password) => gql`
    mutation {
      login(data: {email: ${JSON.stringify(email)}, password: ${JSON.stringify(password)}}) {
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
      mutation: loginUser(email, password),
    })
    .then(response => {
      localStorage.setItem('token', JSON.stringify(response.data.login.token))
      func(response.data.login.user)
    })
}

export { _MutationLogIn }
