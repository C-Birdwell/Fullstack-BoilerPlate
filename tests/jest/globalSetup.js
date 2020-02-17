require('@babel/register')
require('@babel/core')
require('@babel/plugin-transform-runtime')

const server = require('../../src/server').default

module.exports = async () => {
  global.httpServer = await server.start()
}
