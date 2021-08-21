const HttpError = require('~common/error/HttpError')

/**
 * @typedef {import('@types/express').Request} Request
 * @typedef {import('@types/express').Response} Response
 */
/**
 * @callback ReqCallback
 * @param {Request} req
 */

/**
 * @param {ReqCallback} callback
 */
exports.getReqHandleFunc = function (callback) {
  return function (req, res, next) {
    return tryHandleReq(req, res, next, callback)
  }
}

/**
 * @param {Request} req
 * @param {Response} res
 */
async function tryHandleReq (req, res, next, callback) {
  try {
    const result = await callback(req)
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

/**
 * @param {Error} err
 */
function consoleUnexpectedError (err) {
  const line = '----------'
  const time = (new Date()).toISOString()
  const text = 'unexpected error'
  console.error(`${line}\n${time}\n${text}\n${err.stack}\n${line}\n`)
}
