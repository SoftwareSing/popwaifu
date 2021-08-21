module.exports = class Waifu {
  /**
   * @param {Object} obj
   * @param {String} obj.waifuId
   * @param {String} obj.name
   * @param {String} obj.imgNormalUrl
   * @param {String} obj.imgPopUrl
   * @param {String} obj.imgNormalOriginInfo
   * @param {String} obj.imgPopOriginInfo
   * @param {String} obj.popAudioUrl
   * @param {Number} obj.popCount
   */
  constructor ({ waifuId, name, imgNormalUrl, imgPopUrl, imgNormalOriginInfo, imgPopOriginInfo, popAudioUrl, popCount }) {
    this.waifuId = waifuId
    this.name = name
    this.imgNormalUrl = imgNormalUrl
    this.imgPopUrl = imgPopUrl
    this.imgNormalOriginInfo = imgNormalOriginInfo
    this.imgPopOriginInfo = imgPopOriginInfo
    this.popAudioUrl = popAudioUrl
    this.popCount = popCount
  }
}
