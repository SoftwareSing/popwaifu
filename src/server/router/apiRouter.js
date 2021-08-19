const express = require('express')

const { waifuRouterV1 } = require('./waifuRouter')

const apiRouter = express.Router()

const v1 = express.Router()
v1.route('/').get((req, res) => res.status(200).json('popwaifu API/V1'))
v1.use('/waifu', waifuRouterV1)

apiRouter.route('/').get(function (req, res) {
  res.status(200).json('popwaifu API')
})
apiRouter.use('/v1', v1)

exports.apiRouter = apiRouter
