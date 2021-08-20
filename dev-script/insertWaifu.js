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
    imgNormalUrl: 'https://i.imgur.com/yYmR0t5.png',
    imgPopUrl: 'https://i.imgur.com/cmFYQri.png',
    imgNormalOriginInfo: 'picture from No.15',
    imgPopOriginInfo: 'picture from No.15',
    popAudioUrl: 'https://no15rescute.github.io/PopLeopardCat/A.mp3'
  })
}

run()
