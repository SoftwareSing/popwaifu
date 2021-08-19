const Mongodb = require('~common/connection/Mongodb')
const WaifuRepo = require('~entity/waifu/WaifuRepo')

async function run () {
  await Mongodb.connect()
  await insertWaifu()
  await Mongodb.disconnect()
}

async function insertWaifu () {
  await WaifuRepo.addNewWaifu({
    name: 'waifu1',
    imgNormal: 'https://i.imgur.com/yYmR0t5.png',
    imgPop: 'https://i.imgur.com/cmFYQri.png'
  })
}

run()
