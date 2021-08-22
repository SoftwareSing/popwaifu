const cacheBridge = require('cache-bridge')
const { redisCacheClient } = require('~common/connection/redis')
const { popLimit } = require('~config/limitConfig')

const PopLogModel = require('./PopLogModel')

const defaultProjection = { schemaVersion: 0 }

const { bridge: recentLogBridge, cache: recentLogCache } = cacheBridge({
  cacheClient: redisCacheClient,
  prefix: 'popLog',
  ttl: 15 * 1000,
  cacheUndefined: true,
  ttlForUndefined: 1 * 1000,
  get: async function (ip) {
    const obj = await PopLogModel
      .findOne({
        ip,
        logTime: { $gte: new Date(Date.now() - popLimit.time) }
      }, defaultProjection)
      .sort({ logTime: -1 })
      .lean()
    return obj || undefined
  }
})

exports.getIpRecentLog = function (ip) {
  return recentLogBridge.get(ip)
}

exports.delIpRecentLogCache = function (ip) {
  return recentLogCache.del(ip)
}
