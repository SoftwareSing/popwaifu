module.exports = class Waifu {
  /**
   * @param {String} waifuId
   * @param {String} name
   * @param {String} imgNormalUrl
   * @param {String} imgPopUrl
   * @param {String} imgNormalOriginInfo
   * @param {String} imgPopOriginInfo
   * @param {Number} popCount
   */
  constructor ({ waifuId, name, imgNormalUrl, imgPopUrl, imgNormalOriginInfo, imgPopOriginInfo, popCount }) {
    this.waifuId = waifuId
    this.name = name
    this.imgNormalUrl = imgNormalUrl
    this.imgPopUrl = imgPopUrl
    this.imgNormalOriginInfo = imgNormalOriginInfo
    this.imgPopOriginInfo = imgPopOriginInfo
    this.popCount = popCount
  }
}
