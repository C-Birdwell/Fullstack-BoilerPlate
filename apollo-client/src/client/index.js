import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  request: operation => {
    const token = localStorage.getItem('token')
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    })
  },
})

export { client as default }
