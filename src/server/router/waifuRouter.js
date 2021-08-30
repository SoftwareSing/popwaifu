const express = require('express')

const WaifuController = require('../controller/waifu/WaifuController')
const { getReqHandleFunc } = require('./getReqHandleFunc')

const waifuRouterV1 = express.Router()

waifuRouterV1.route('/list')
  .get(getReqHandleFunc((req) => {
    return WaifuController.getList()
  }, { cacheControl: 'public, max-age=5' }))

module.exports = {
  waifuRouterV1
}
