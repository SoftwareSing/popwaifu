const { popLimit } = require('~config/limitConfig')
const HttpError = require('~common/error/HttpError')

const PopLogBridge = require('./PopLogBridge')
const { buildPopLog, getIpTimeKey } = require('./helper')

exports.getIpRecentLog = async function (ip) {
  const ipTimeKey = getIpTimeKey(ip)
  const popCount = await PopLogBridge.getIpTimeCount(ipTimeKey)
  if (!popCount) return undefined

  return buildPopLog(ipTimeKey, popCount)
}

exports.record = async function ({ ip, popCount }) {
  if (popCount > popLimit.count) throw new HttpError(403, 'too many')

  const ipTimeKey = getIpTimeKey(ip)
  const writeResult = await PopLogBridge.writeIpTimeCount(ipTimeKey, popCount)
  if (!writeResult) throw new HttpError(429, 'too fast')

  return buildPopLog(ipTimeKey, popCount)
}
