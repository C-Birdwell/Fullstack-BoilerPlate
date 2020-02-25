import {
  USERS,
  USER_ID,
  LOGGED_USER,
  CREATE_USER_USERNAME,
  CREATE_USER_PASSWORD,
  CREATE_USER_EMAIL,
} from '../typeDefs'

const INITIAL_STATE = {
  users: [],
  userID: '',
  createUserUsername: 'test2',
  createUserPassword: 'password123',
  createUserEmail: 'test2@testt.com',
  loggedUser: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS:
      return { ...state, users: action.payload }

    case USER_ID:
      return { ...state, userID: action.payload }

    case CREATE_USER_USERNAME:
      return { ...state, createUserUsername: action.payload }

    case CREATE_USER_PASSWORD:
      return { ...state, createUserPassword: action.payload }

    case CREATE_USER_EMAIL:
      return { ...state, createUserEmail: action.payload }

    case LOGGED_USER:
      return { ...state, loggedUser: action.payload }

    default:
      return { ...state }
  }
}
