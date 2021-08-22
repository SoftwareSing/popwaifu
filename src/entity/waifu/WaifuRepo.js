const WaifuBridge = require('./WaifuBridge')
const WaifuModel = require('./WaifuModel')
const { buildWaifu } = require('./helper')

exports.getList = async function () {
  /**
   * @type {Array}
   */
  const objList = await WaifuBridge.getList()
  return objList.map(buildWaifu)
}

/**
 * @param {String} name
 * @param {String} imgNormalUrl
 * @param {String} imgPopUrl
 * @param {String} imgNormalOriginInfo
 * @param {String} imgPopOriginInfo
 * @param {String} popAudioUrl
 */
exports.addNewWaifu = async function ({ name, imgNormalUrl, imgPopUrl, imgNormalOriginInfo, imgPopOriginInfo, popAudioUrl }) {
  const doc = await WaifuModel.create({ name, imgNormalUrl, imgPopUrl, imgNormalOriginInfo, imgPopOriginInfo, popAudioUrl })
  const obj = doc.toObject()
  return buildWaifu(obj)
}

/**
 * @param {Map<String, Number>} waifuPopMap
 */
exports.addWaifusPopCount = async function (waifuPopMap) {
  const writes = []
  for (const [waifuId, popCount] of waifuPopMap.entries()) {
    writes.push({
      updateOne: {
        filter: { _id: waifuId },
        update: { $inc: { popCount } }
      }
    })
  }

  await WaifuModel.bulkWrite(writes, { ordered: false })
}
