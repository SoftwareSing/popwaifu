/**
 * @typedef {import('@types/express').Request} Request
 */

/**
 * @param {Request} req
 */
exports.getIp = function (req) {
  return req.socket.remoteAddress
}
