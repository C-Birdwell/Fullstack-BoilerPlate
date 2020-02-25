import {
  USERS,
  USER_ID,
  CREATE_USER_PASSWORD,
  CREATE_USER_USERNAME,
  CREATE_USER_EMAIL,
  LOGGED_USER,
} from '../typeDefs'

export const _getAllUsers = payload => ({
  type: USERS,
  payload,
})

export const _getUserID = payload => ({
  type: USER_ID,
  payload,
})

export const _createUserUsername = payload => ({
  type: CREATE_USER_USERNAME,
  payload,
})

export const _createUserEmail = payload => ({
  type: CREATE_USER_EMAIL,
  payload,
})

export const _createUserPassword = payload => ({
  type: CREATE_USER_PASSWORD,
  payload,
})

export const _getLoggedUser = payload => ({
  type: LOGGED_USER,
  payload,
})
