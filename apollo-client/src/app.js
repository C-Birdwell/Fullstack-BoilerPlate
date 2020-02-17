import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import client from './client'

import { ApolloProvider } from '@apollo/react-hooks'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

const jsx = (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </ApolloProvider>
)

ReactDOM.render(jsx, document.getElementById('app'))
