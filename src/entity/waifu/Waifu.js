module.exports = class Waifu {
  /**
   * @param {String} waifuId
   * @param {String} name
   * @param {String} imgNormal
   * @param {String} imgPop
   * @param {Number} popCount
   */
  constructor ({ waifuId, name, imgNormal, imgPop, popCount }) {
    this.waifuId = waifuId
    this.name = name
    this.imgNormal = imgNormal
    this.imgPop = imgPop
    this.popCount = popCount
  }
}
