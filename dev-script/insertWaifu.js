const Mongodb = require('~common/connection/Mongodb')
const WaifuRepo = require('~entity/waifu/WaifuRepo')

async function run () {
  await Mongodb.connect()
  await insertWaifu()
  await Mongodb.disconnect()
}

async function insertWaifu () {
  await WaifuRepo.addNewWaifu({
    name: '十五號',
    imgNormalUrl: 'https://i.imgur.com/yYmR0t5.png',
    imgPopUrl: 'https://i.imgur.com/cmFYQri.png',
    imgInfo: 'picture from PopLeopardCat ( https://no15rescute.github.io/PopLeopardCat/ )',
    popAudioUrl: 'https://no15rescute.github.io/PopLeopardCat/A.mp3',
    popAudioInfo: 'audio from PopLeopardCat ( https://no15rescute.github.io/PopLeopardCat/ )'
  }, {
    name: '杏仁ミル',
    imgNormalUrl: 'https://i.imgur.com/yWz4gP1.png',
    imgPopUrl: 'https://i.imgur.com/P5DjSxE.png',
    imgInfo: 'picture from 杏仁ミル twitter ( https://twitter.com/AnninMirudayo/status/1422580442876715008 ) ( https://twitter.com/AnninMirudayo/status/1421945176872742913 )',
    popAudioUrl: '',
    popAudioInfo: ''
  })
}

run()
