/**
 * @typedef {Object} ModeConfig
 * @property {String} modeName
 * @property {String} imgNormalUrl
 * @property {String} imgPopUrl
 * @property {String} [imgInfo]
 * @property {String} [audioNormalUrl]
 * @property {String} [audioPopUrl]
 * @property {String} [audioInfo]
 */

module.exports = class Waifu {
  /**
   * @param {Object} obj
   * @param {String} obj.waifuId
   * @param {String} obj.name
   * @param {Number} obj.popCount
   * @param {Array<ModeConfig>} obj.modeConfigList
   */
  constructor ({ waifuId, name, popCount, modeConfigList }) {
    this.waifuId = waifuId
    this.name = name
    this.popCount = popCount
    this.modeConfigList = modeConfigList
  }
}
