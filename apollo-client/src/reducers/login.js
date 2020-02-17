import { LOGIN_EMAIL, LOGIN_PASSWORD } from '../typeDefs'

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

    default:
      return { ...state }
  }
}
