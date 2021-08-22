const { promisify } = require('util')
const redis = require('redis')
const cacheBridge = require('cache-bridge')
const RedisCacheClient = require('bridge-redis')(cacheBridge.CacheClient)

const redisClient = redis.createClient()
const redisCacheClient = new RedisCacheClient({ client: redisClient })

exports.disconnectRedis = promisify(redisClient.quit).bind(redisClient)
exports.redisClient = redisClient
exports.redisCacheClient = redisCacheClient
