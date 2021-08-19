const Waifu = require('./Waifu')

exports.buildWaifu = function (obj) {
  obj.waifuId = String(obj._id)
  return new Waifu(obj)
}
