const express = require('express')
const swaggerUi = require('swagger-ui-express')
const SwaggerParser = require('@apidevtools/swagger-parser')

const { serverApiSpecMainPath } = require('~config/apiSpecPath')
const { consoleUnexpectedError } = require('~common/error/consoleUnexpectedError')

const apiSpecRouter = express.Router()

const htmlPromise = genHtml()
async function genHtml () {
  const swaggerDoc = await SwaggerParser.bundle(serverApiSpecMainPath)
  return swaggerUi.generateHTML(swaggerDoc, { customSiteTitle: 'popwaifu API spec' })
}

apiSpecRouter.use((req, res, next) => {
  res.setHeader('Cache-Control', 'public, max-age=900')
  return next()
})

apiSpecRouter.use(swaggerUi.serve)

apiSpecRouter.get('/', async (req, res) => {
  try {
    const page = await htmlPromise
    return res.status(200).send(page)
  } catch (err) {
    consoleUnexpectedError(err)
    return res.status(500).json({ error: 'unknow swagger error' })
  }
})

exports.apiSpecRouter = apiSpecRouter
