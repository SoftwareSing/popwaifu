const cacheBridge = require('cache-bridge')
const { redisCacheClient } = require('~common/connection/redis')

const WaifuModel = require('./WaifuModel')

const defaultProjection = { schemaVersion: 0, createdAt: 0, updatedAt: 0 }

const { bridge: listBridge } = cacheBridge({
  cacheClient: redisCacheClient,
  prefix: 'list',
  ttl: 4 * 1000,
  get: async function () {
    return await WaifuModel.find({}, defaultProjection).lean()
  }
})

const { bridge: urlIdWaifuBridge } = cacheBridge({
  cacheClient: redisCacheClient,
  prefix: 'urlIdWaifu',
  ttl: 120 * 1000,
  cacheUndefined: true,
  ttlForUndefined: 10 * 1000,
  get: async function (urlId) {
    const obj = await WaifuModel.findOne({ urlId }, defaultProjection).lean()
    return obj || undefined
  }
})

exports.getList = function () {
  return listBridge.get('list')
}

exports.getByUrlId = function (urlId) {
  return urlIdWaifuBridge.get(urlId)
}
