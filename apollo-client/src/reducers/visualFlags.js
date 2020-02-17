import { FLAG_NEW_USER } from '../typeDefs'

const INITIAL_STATE = {
  flagNewUser: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FLAG_NEW_USER:
      return { ...state, flagNewUser: action.payload }

    default:
      return { ...state }
  }
}
