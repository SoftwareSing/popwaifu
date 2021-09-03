/**
 * @param {Error} err
 */
exports.consoleUnexpectedError = function (err) {
  const line = '----------'
  const time = (new Date()).toISOString()
  const text = 'unexpected error'
  console.error(`${line}\n${time}\n${text}\n${err.stack}\n${line}\n`)
}
