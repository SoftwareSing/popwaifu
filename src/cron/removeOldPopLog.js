const PopLogRepo = require('~entity/popLog/PopLogRepo')

exports.removeOldPopLog = async function () {
  const startTime = Date.now()
  const deleteCount = await PopLogRepo.removeLog({
    beforeTime: new Date(Date.now() - 24 * 60 * 60 * 1000)
  })
  const endTime = Date.now()

  console.log(`-----\n${new Date().toISOString()} : removeOldPopLog\ncost time: ${endTime - startTime}ms\ndelete count: ${deleteCount}\n-----`)
}
