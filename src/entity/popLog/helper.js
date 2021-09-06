const PopLog = require('./PopLog')
const { popLimit } = require('~config/limitConfig')

function buildPopLog (ipTimeKey, count) {
  const { ip, time } = getIpAndTimeFromKey(ipTimeKey)
  return new PopLog({ popLogId: ipTimeKey, ip, logTime: time, popCount: count })
}

function getLogTime () {
  const now = Date.now()
  return now - (now % popLimit.time)
}

function getIpTimeKey (ip) {
  const logTime = getLogTime()
  return `${ip}_${logTime}`
}

/**
 * @param {String} ipTimeKey
 */
function getIpAndTimeFromKey (ipTimeKey) {
  const [, ip, timeStr] = ipTimeKey.match(/^(.{1,})_([0-9]{1,})$/)
  return { ip, time: Number(timeStr) }
}

module.exports = {
  buildPopLog,
  getLogTime,
  getIpTimeKey,
  getIpAndTimeFromKey
}
