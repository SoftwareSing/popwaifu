const { Cache } = require('cache-bridge')
const { redisCacheClient } = require('~common/connection/redis')
const { popLimit } = require('~config/limitConfig')

const recentLogCache = new Cache(redisCacheClient, {
  prefix: 'ipLog',
  ttl: popLimit.time
})

exports.getIpTimeCount = function (ipTimeKey) {
  return recentLogCache.get(ipTimeKey)
}

exports.writeIpTimeCount = function (ipTimeKey, count) {
  return recentLogCache.setNotExist(ipTimeKey, count)
}
