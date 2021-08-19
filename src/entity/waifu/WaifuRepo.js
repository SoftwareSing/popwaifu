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
 * @param {String} imgNormal
 * @param {String} imgPop
 */
exports.addNewWaifu = async function ({ name, imgNormal, imgPop }) {
  const doc = await WaifuModel.create({ name, imgNormal, imgPop })
  const obj = doc.toObject()
  return buildWaifu(obj)
}
