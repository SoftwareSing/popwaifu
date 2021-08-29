const WaifuBridge = require('./WaifuBridge')
const WaifuModel = require('./WaifuModel')
const { buildWaifu } = require('./helper')

/**
 * @typedef {import('./Waifu').ModeConfig} ModeConfig
 */

exports.getList = async function () {
  /**
   * @type {Array}
   */
  const objList = await WaifuBridge.getList()
  return objList.map(buildWaifu)
}

/**
 * @param {Object} waifuData
 * @param {String} waifuData.urlId
 * @param {String} waifuData.name
 * @param {Array<ModeConfig>} waifuData.modeConfigList
 */
exports.addNewWaifu = async function ({ urlId, name, modeConfigList }) {
  const doc = await WaifuModel.create({ urlId, name, modeConfigList })
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
