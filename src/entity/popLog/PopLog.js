module.exports = class PopLog {
  /**
   * @param {Object} obj
   * @param {String} obj.popLogId
   * @param {String} obj.ip
   * @param {Number} obj.popCount
   * @param {Date | Number} obj.logTime
   */
  constructor ({ popLogId, ip, popCount, logTime }) {
    this.popLogId = popLogId
    this.ip = ip
    this.popCount = popCount
    this.logTime = new Date(logTime)
  }
}
