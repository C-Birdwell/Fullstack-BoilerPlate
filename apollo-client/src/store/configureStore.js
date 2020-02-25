import { createStore, combineReducers } from 'redux'
import login from '../reducers/login'
import user from '../reducers/user'
import post from '../reducers/post'
import visualFlags from '../reducers/visualFlags'

export default () => {
  const store = createStore(
    combineReducers({ login, user, post, visualFlags }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

  return store
}
