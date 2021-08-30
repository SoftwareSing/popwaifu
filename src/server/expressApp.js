const express = require('express')
const cors = require('cors')
const { ENV, envKeyword } = require('~config/env')
const { webPublicDirPath, webIndexFilePath } = require('~config/webFilePath')

const { apiRouter } = require('./router/apiRouter')

exports.expressApp = function () {
  const app = express()

  if (ENV === envKeyword.development) app.use(cors())
  app.use(express.urlencoded({ limit: '10mb', extended: true }))
  app.use(express.json({ limit: '10mb', extended: true }))
  app.use('/api', apiRouter)
  app.use(express.static(webPublicDirPath, { maxAge: 10 * 60 * 1000 }))
  app.get('*', function (req, res) {
    res.setHeader('Cache-Control', 'public, max-age=600')
    res.sendFile(webIndexFilePath)
  })
  app.use(function (req, res) {
    res.status(404).json({ error: 'unknow path' })
  })

  return app
}
