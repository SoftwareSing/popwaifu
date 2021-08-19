const http = require('http')

const Mongodb = require('~common/connection/Mongodb')

const { expressApp } = require('./expressApp')

function main () {
  const app = expressApp()
  const httpServer = http.createServer(app)

  startServer(httpServer)

  process.on('SIGINT', () => {
    console.info('SIGINT signal received')
    closeServer(httpServer)
  })
}

async function startServer (SERVER) {
  const port = process.env.PORT || 3000

  await Mongodb.connect()
  SERVER.listen(port, () => {
    console.log('server running')
    console.log(`port: ${port}`)
    console.log(`environment: ${process.env.NODE_ENV}`)
  })
}

function closeServer (SERVER) {
  console.log('closing http server')

  SERVER.close(async (err) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }

    await Mongodb.disconnect()
    console.log('http server closed')
    process.exit(0)
  })
}

main()
