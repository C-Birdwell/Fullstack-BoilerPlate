import { USERS, CREATE_USER_USERNAME, CREATE_USER_PASSWORD, CREATE_USER_EMAIL } from '../typeDefs'

const INITIAL_STATE = {
  users: [],
  createUserUsername: '',
  createUserPassword: '',
  createUserEmail: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS:
      return { ...state, users: action.payload }

    case CREATE_USER_USERNAME:
      return { ...state, createUserUsername: action.payload }

    case CREATE_USER_PASSWORD:
      return { ...state, createUserPassword: action.payload }

    case CREATE_USER_EMAIL:
      return { ...state, createUserEmail: action.payload }

    default:
      return { ...state }
  }
}
