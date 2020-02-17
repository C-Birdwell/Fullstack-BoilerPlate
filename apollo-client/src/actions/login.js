import { LOGIN_EMAIL, LOGIN_PASSWORD } from '../typeDefs'

export const _loginUserEmail = payload => ({
  type: LOGIN_EMAIL,
  payload,
})

export const _loginUserPassword = payload => ({
  type: LOGIN_PASSWORD,
  payload,
})
