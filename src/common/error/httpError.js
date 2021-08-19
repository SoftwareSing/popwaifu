class HttpError extends Error {
  /**
   * @param {Number} statusCode
   */
  constructor (statusCode, message) {
    super(message)
    this.statusCode = statusCode
  }
}

module.exports = {
  HttpError
}
