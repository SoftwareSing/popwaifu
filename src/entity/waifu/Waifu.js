module.exports = class Waifu {
  /**
   * @param {Object} obj
   * @param {String} obj.waifuId
   * @param {String} obj.name
   * @param {String} obj.imgNormalUrl
   * @param {String} obj.imgPopUrl
   * @param {String} obj.imgInfo
   * @param {String} obj.popAudioUrl
   * @param {String} obj.popAudioInfo
   * @param {Number} obj.popCount
   */
  constructor ({ waifuId, name, imgNormalUrl, imgPopUrl, imgInfo, popAudioUrl, popAudioInfo, popCount }) {
    this.waifuId = waifuId
    this.name = name
    this.imgNormalUrl = imgNormalUrl
    this.imgPopUrl = imgPopUrl
    this.imgInfo = imgInfo
    this.popAudioUrl = popAudioUrl
    this.popAudioInfo = popAudioInfo
    this.popCount = popCount
  }
}
