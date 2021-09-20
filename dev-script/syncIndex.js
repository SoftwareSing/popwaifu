const Mongodb = require('~common/connection/Mongodb')
const WaifuModel = require('~entity/waifu/WaifuModel')

async function run () {
  await Mongodb.connect()
  await syncIndex()
  await Mongodb.disconnect()
}

async function syncIndex () {
  for (const model of [WaifuModel]) {
    await model.syncIndexes()
  }
}

run()
