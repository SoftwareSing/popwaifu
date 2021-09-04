const { disconnectRedis } = require('~common/connection/redis')
const Mongodb = require('~common/connection/Mongodb')
const WaifuRepo = require('~entity/waifu/WaifuRepo')

async function run () {
  await Mongodb.connect()
  await insertWaifu()
  await Mongodb.disconnect()
  await disconnectRedis()
}

async function insertWaifu () {
  await WaifuRepo.upsertWaifu({
    urlId: 'no15',
    name: '十五號',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/yYmR0t5.png',
        imgPopUrl: 'https://i.imgur.com/cmFYQri.png',
        imgIconUrl: 'https://i.imgur.com/Qq6Cp1U.png',
        imgInfo: 'picture from PopLeopardCat ( https://no15rescute.github.io/PopLeopardCat/ )',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/15-a.mp3',
        audioInfo: 'audio from PopLeopardCat ( https://no15rescute.github.io/PopLeopardCat/ )'
      },
      {
        modeName: 'one-two',
        imgNormalUrl: 'https://i.imgur.com/0rFGRui.png',
        imgPopUrl: 'https://i.imgur.com/GsxuGZN.png',
        imgIconUrl: 'https://i.imgur.com/qi8osxh.png',
        imgInfo: 'https://youtu.be/QEQntL4Bb14',
        audioNormalUrl: 'https://softwaresing.github.io/popwaifu-file/audio/15-two.mp3',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/15-one.mp3',
        audioInfo: 'https://youtu.be/QEQntL4Bb14'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'annin-miru',
    name: '杏仁ミル',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/yWz4gP1.png',
        imgPopUrl: 'https://i.imgur.com/P5DjSxE.png',
        imgIconUrl: 'https://i.imgur.com/UHPLtzv.png',
        imgInfo: 'picture from 杏仁ミル twitter ( https://twitter.com/AnninMirudayo/status/1422580442876715008 ) ( https://twitter.com/AnninMirudayo/status/1421945176872742913 )',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/miru-a-2.mp3',
        audioInfo: 'https://youtu.be/19sRmPz6HIY?t=22'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'miku',
    name: '初音ミク',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/w50ILOk.jpg',
        imgPopUrl: 'https://i.imgur.com/8jOQjgL.jpg',
        imgIconUrl: 'https://i.imgur.com/meOjXSc.png',
        imgInfo: 'picture from pixiv: 千夜QYS3 ( https://www.pixiv.net/artworks/56710319 )',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/miku-meow.mp3',
        audioInfo: 'https://youtu.be/kS2yWmLCtnc?t=44'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'ubye',
    name: '悠白',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/yO9r0QX.png',
        imgPopUrl: 'https://i.imgur.com/1QCbJpr.png',
        imgIconUrl: 'https://i.imgur.com/aNbJ5eV.png',
        imgInfo: 'https://youtu.be/jXW6zlzLCGg?t=3585',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/ubye-a.mp3',
        audioInfo: 'https://youtu.be/kA6oIG9ulVs?t=3'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'gura',
    name: 'Gawr Gura',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/G47Ea40.png',
        imgPopUrl: 'https://i.imgur.com/tly5u3M.png',
        imgIconUrl: 'https://i.imgur.com/bGuWlhS.png',
        imgInfo: 'https://youtu.be/dBK0gKW61NU?t=213',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/gura-a.mp3',
        audioInfo: 'https://youtu.be/dBK0gKW61NU?t=220'
      }
    ]
  })
  // for (let i = 0; i < 200; i += 1) {
  //   await WaifuRepo.upsertWaifu({
  //     urlId: `${Math.random()}${Date.now()}`.slice(2),
  //     name: `${Math.random()}`,
  //     modeConfigList: [
  //       {
  //         modeName: 'default',
  //         imgNormalUrl: 'https://i.imgur.com/w50ILOk.jpg',
  //         imgPopUrl: 'https://i.imgur.com/8jOQjgL.jpg',
  //         imgInfo: `${Date.now()}${Math.random()}`
  //       }
  //     ]
  //   })
  // }
}

run()
