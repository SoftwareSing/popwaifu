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

exports.getList = function () {
  return listBridge.get('list')
}
