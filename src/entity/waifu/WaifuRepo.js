const WaifuModel = require('./WaifuModel')
const { buildWaifu } = require('./helper')

const defaultProjection = { schemaVersion: 0, createdAt: 0, updatedAt: 0 }

exports.getList = async function () {
  /**
   * @type {Array}
   */
  const objList = await WaifuModel.find({}, defaultProjection).lean()
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
