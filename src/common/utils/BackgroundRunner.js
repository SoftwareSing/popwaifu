const { sleep } = require('./sleep')

/**
 * @type {Set<Promise>}
 */
const set = new Set()

/**
 * @param {Function} callback
 */
exports.run = async function (callback) {
  const execPromise = execCallback(callback)
  set.add(execPromise)
  await execPromise
  set.delete(execPromise)
}

exports.waitAllDone = async function () {
  while (set.size > 0) {
    await Promise.all([...set])
    await sleep(10)
  }
}

async function execCallback (cb) {
  try {
    return await cb()
  } catch (err) {
    console.error(err)
  }
}
