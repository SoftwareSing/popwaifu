const express = require('express')

const PopController = require('../controller/pop/PopController')
const { getIp } = require('./getIp')
const { getReqHandleFunc } = require('./getReqHandleFunc')

const popRouterV1 = express.Router()

popRouterV1.route('/record')
  .post(getReqHandleFunc((req) => {
    return PopController.recordPop({
      ip: getIp(req),
      waifuPopObj: req.body.waifuPopObj
    })
  }, { successStatusCode: 202 }))

module.exports = {
  popRouterV1
}
