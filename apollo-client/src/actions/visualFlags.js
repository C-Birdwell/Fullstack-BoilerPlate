import { FLAG_NEW_USER } from '../typeDefs'

export const _flagNewUser = payload => ({
  type: FLAG_NEW_USER,
  payload,
})
