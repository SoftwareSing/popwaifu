const WaifuBridge = require('./WaifuBridge')
const WaifuModel = require('./WaifuModel')
const { buildWaifu } = require('./helper')
const { addWaifusPopCount } = require('./waifuRepoMethod/addWaifusPopCount')

/**
 * @typedef {import('./Waifu').ModeConfig} ModeConfig
 */

exports.addWaifusPopCount = addWaifusPopCount

exports.getList = async function () {
  /**
   * @type {Array}
   */
  const objList = await WaifuBridge.getList()
  return objList.map(buildWaifu)
}

exports.getByUrlId = async function (urlId) {
  const obj = await WaifuBridge.getByUrlId(urlId)
  return obj ? buildWaifu(obj) : undefined
}

/**
 * @param {Object} waifuData
 * @param {String} waifuData.urlId
 * @param {String} waifuData.name
 * @param {Array<ModeConfig>} waifuData.modeConfigList
 */
exports.upsertWaifu = async function ({ urlId, name, modeConfigList }) {
  const obj = await WaifuModel.findOneAndUpdate(
    { urlId },
    { name, modeConfigList },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  ).lean()
  return buildWaifu(obj)
}
