const { popLimit } = require('~config/limitConfig')
const HttpError = require('~common/error/HttpError')

const PopLogBridge = require('./PopLogBridge')
const PopLogModel = require('./PopLogModel')
const { buildPopLog } = require('./helper')

exports.getIpRecentLog = async function (ip) {
  const obj = await PopLogBridge.getIpRecentLog(ip)
  if (!obj) return undefined

  return buildPopLog(obj)
}

exports.record = async function ({ ip, popCount }) {
  if (popCount > popLimit.count) throw new HttpError(403, 'too many')

  try {
    const doc = await PopLogModel.create({ ip, popCount, logTime: getLogTime() })
    await PopLogBridge.delIpRecentLogCache(ip)
    const obj = doc.toObject()
    return buildPopLog(obj)
  } catch (err) {
    if (err.name === 'MongoError' && err.code === 11000) throw new HttpError(429, 'too fast')
    else throw err
  }
}

// make unique index work
function getLogTime () {
  const now = Date.now()
  return now - (now % popLimit.time)
}
