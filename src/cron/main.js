const cron = require('node-cron')
const Mongodb = require('~common/connection/Mongodb')
const { disconnectRedis } = require('~common/connection/redis')

const { removeOldPopLog } = require('./removeOldPopLog')

const taskList = []
const runningSet = new Set()

async function main () {
  await Mongodb.connect()

  // ┌────────────── second (optional) 0-59
  // │ ┌──────────── minute 0-59
  // │ │ ┌────────── hour 0-23
  // │ │ │ ┌──────── day of month 1-31
  // │ │ │ │ ┌────── month 1-12 (or names)
  // │ │ │ │ │ ┌──── day of week 0-7 (or names, 0 or 7 are sunday)
  // │ │ │ │ │ │
  // │ │ │ │ │ │
  // * * * * * *

  schedule('0 0 * * * *', removeOldPopLog)
}

function schedule (expression, func) {
  const task = cron.schedule(expression, willRun(func))
  taskList.push(task)
}

function willRun (job) {
  return async function () {
    const jobPromise = job()
    runningSet.add(jobPromise)
    try {
      await jobPromise
    } catch (err) {
      console.error(`-----\n${new Date().toISOString()}`)
      console.error(err)
      console.error('-----')
    } finally {
      runningSet.delete(jobPromise)
    }
  }
}

async function close () {
  for (const task of taskList) {
    task.stop()
  }

  console.log(`${new Date().toISOString()} wait all running job finish`)
  await Promise.all([...runningSet])

  console.log(`${new Date().toISOString()} close connection`)
  await Promise.all([
    Mongodb.disconnect(),
    disconnectRedis()
  ])
}

main()
process.on('SIGINT', function () {
  console.info('SIGINT signal received')
  close()
})
