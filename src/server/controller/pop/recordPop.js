const HttpError = require('~common/error/HttpError')
const PopLogRepo = require('~entity/popLog/PopLogRepo')
const WaifuRepo = require('~entity/waifu/WaifuRepo')
const { popLimit } = require('~config/limitConfig')
const { isValidId } = require('~common/checker/id')
const { isObject } = require('~common/checker/object')

exports.recordPop = async function ({ ip, waifuPopObj }) {
  const { totalPopCount, waifuPopMap } = getWaifuPopInfoAndCheck(waifuPopObj)
  await checkIpLog(ip)

  await PopLogRepo.record({ ip, popCount: totalPopCount })
  await WaifuRepo.addWaifusPopCount(waifuPopMap)
}

function getWaifuPopInfoAndCheck (waifuPopObj) {
  if (!isObject(waifuPopObj)) throw new HttpError(400, 'invalid waifuPopObj')

  const { count: countLimit } = popLimit
  const waifuPopMap = new Map()
  let totalPopCount = 0
  for (const [waifuId, popCount] of Object.entries(waifuPopObj)) {
    if (!Number.isSafeInteger(popCount) || popCount < 1) throw new HttpError(400, 'invalid pop count')
    if (popCount > countLimit) throw new HttpError(403, 'too many')

    totalPopCount += popCount
    if (totalPopCount > countLimit) throw new HttpError(403, 'too many')

    if (!isValidId(waifuId)) throw new HttpError(400, 'invalid waifu id')
    waifuPopMap.set(waifuId, popCount)
  }

  return { totalPopCount, waifuPopMap }
}

async function checkIpLog (ip) {
  const log = await PopLogRepo.getIpRecentLog(ip)
  if (log && Date.now() - log.logTime.getTime() < popLimit.time) {
    throw new HttpError(429, 'too many')
  }
}
