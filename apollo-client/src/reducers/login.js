import { LOGIN_EMAIL, LOGIN_PASSWORD, LOGIN_CLEAR } from '../typeDefs'

const INITIAL_STATE = {
  loginEmail: '',
  loginPassword: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_EMAIL:
      return { ...state, loginEmail: action.payload }

    case LOGIN_PASSWORD:
      return { ...state, loginPassword: action.payload }

    case LOGIN_CLEAR:
      return Object.assign(...state, INITIAL_STATE)

    default:
      return { ...state }
  }
}
