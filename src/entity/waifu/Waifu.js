module.exports = class Waifu {
  /**
   * @param {String} waifuId
   * @param {String} name
   * @param {String} imgNormalUrl
   * @param {String} imgPopUrl
   * @param {String} imgNormalOriginInfo
   * @param {String} imgPopOriginInfo
   * @param {String} popAudioUrl
   * @param {Number} popCount
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
