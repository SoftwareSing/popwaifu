const express = require('express')

const { apiRouter } = require('./router/apiRouter')

exports.expressApp = function () {
  const app = express()

  app.use(express.urlencoded({ limit: '10mb', extended: true }))
  app.use(express.json({ limit: '10mb', extended: true }))
  app.use('/api', apiRouter)
  app.get('/', function (req, res) {
    return res.send('Hello waifu')
  })
  app.use(function (req, res) {
    res.status(404).json({ error: 'unknow path' })
  })

  return app
}
