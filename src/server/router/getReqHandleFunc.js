const HttpError = require('~common/error/HttpError')
const { consoleUnexpectedError } = require('~common/error/consoleUnexpectedError')

/**
 * @typedef {import('@types/express').Request} Request
 * @typedef {import('@types/express').Response} Response
 */
/**
 * @callback ReqCallback
 * @param {Request} req
 */
/**
 * @typedef {Object} Options
 * @property {String} [cacheControl]
 */

/**
 * @param {ReqCallback} callback
 * @param {Options} [options]
 */
exports.getReqHandleFunc = function (callback, options = {}) {
  return function (req, res, next) {
    return tryHandleReq(req, res, next, callback, options)
  }
}

/**
 * @param {Request} req
 * @param {Response} res
 * @param {Options} options
 */
async function tryHandleReq (req, res, next, callback, options) {
  try {
    const result = await callback(req)
    if (options.cacheControl) res.setHeader('Cache-Control', options.cacheControl)

    return res.status(200).json(result)
  } catch (err) {
    if (err instanceof HttpError) {
      return res.status(err.statusCode).json({ error: err.message })
    } else {
      consoleUnexpectedError(err)
      return res.status(500).json({ error: 'server unexpected error' })
    }
  }
}
