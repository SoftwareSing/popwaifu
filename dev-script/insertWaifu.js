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
      },
      {
        modeName: 'no150',
        imgNormalUrl: 'https://i.imgur.com/Sh5gP3C.png',
        imgPopUrl: 'https://i.imgur.com/bPgAvRY.png',
        imgIconUrl: 'https://i.imgur.com/RZuyVHs.png',
        imgInfo: 'https://youtu.be/J4kvgE3bEPA?t=6452',
        audioNormalUrl: 'https://softwaresing.github.io/popwaifu-file/audio/15-150-2.mp3',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/15-150-1.mp3',
        audioInfo: 'https://youtu.be/J4kvgE3bEPA?t=6452'
      },
      {
        modeName: 'chicken',
        imgNormalUrl: 'https://i.imgur.com/V4izKux.png',
        imgPopUrl: 'https://i.imgur.com/imqEcWP.png',
        imgIconUrl: 'https://i.imgur.com/yAUW1Xa.png',
        imgInfo: 'https://youtu.be/sR6Lh05jjLE?t=8115',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/15-chicken.mp3',
        audioInfo: 'https://youtu.be/sR6Lh05jjLE?t=8115'
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
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/miku-meow-2.mp3',
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
  await WaifuRepo.upsertWaifu({
    urlId: 'shirakami-fubuki',
    name: '白上フブキ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/1dXI4bn.png',
        imgPopUrl: 'https://i.imgur.com/ecFG33p.png',
        imgIconUrl: 'https://i.imgur.com/jvtlEsd.png',
        imgInfo: 'https://en.hololive.tv/portfolio/items/shirakami-fubuki',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/shirakami-fubuki-nya.mp3',
        audioInfo: 'https://youtu.be/kQXc80jgk-E?t=7654'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'dio',
    name: 'DIO',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/tdCsOD3.png',
        imgPopUrl: 'https://i.imgur.com/RCpRHu6.png',
        imgIconUrl: 'https://i.imgur.com/tdCsOD3.png',
        imgInfo: 'unknown, but seems from JoJo Part 3'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'coco',
    name: '桐生ココ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/bydcGFC.png',
        imgPopUrl: 'https://i.imgur.com/kdJyMuB.png',
        imgIconUrl: 'https://i.imgur.com/kdJyMuB.png',
        imgInfo: 'https://virtualyoutuber.fandom.com/wiki/Kiryu_Coco/Gallery',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/coco-next-meme.mp3',
        audioInfo: 'https://youtu.be/-AGhA-GaZ_o?t=25'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'minato-aqua',
    name: '湊あくあ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/9Xdi8O1.jpg',
        imgPopUrl: 'https://i.imgur.com/lvB1h1i.jpg',
        imgIconUrl: 'https://i.imgur.com/poPJZ8S.png',
        imgInfo: 'https://youtu.be/rddmVGgem2Q',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/minato-aqua-nya.mp3',
        audioInfo: 'https://youtu.be/rddmVGgem2Q'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'rayer',
    name: '蕾兒',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/XM6yUUU.png',
        imgPopUrl: 'https://i.imgur.com/zIBcFwy.png',
        imgIconUrl: 'https://i.imgur.com/zIBcFwy.png',
        imgInfo: 'https://youtu.be/W9xiniyF2Zk',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/rayer-pop.mp3',
        audioInfo: 'https://youtu.be/W9xiniyF2Zk'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'padko',
    name: '平平子',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/3FBEBVL.jpg',
        imgPopUrl: 'https://i.imgur.com/VQEWET6.jpg',
        imgIconUrl: 'https://i.imgur.com/xrypgmh.png',
        imgInfo: 'https://youtu.be/Z4iRCaUsQx0',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/padko-1.mp3',
        audioInfo: 'https://youtu.be/BjOQD6j9Zyc?t=9233'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'gojo-masaru',
    name: '五条勝',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/t8MR5ju.png',
        imgPopUrl: 'https://i.imgur.com/Sxlf2fU.png',
        imgIconUrl: 'https://i.imgur.com/AeNdaD2.png',
        imgInfo: 'https://youtu.be/K9_A35uCpYA'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'beta-hoonie',
    name: 'β虎妮',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/ZcnpKP1.png',
        imgPopUrl: 'https://i.imgur.com/FCasd4b.png',
        imgIconUrl: 'https://i.imgur.com/fWlFr6q.png',
        imgInfo: 'https://youtu.be/8DepX5_8k2E',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/beta-hoonie-pop.mp3',
        audioInfo: 'https://youtu.be/8DepX5_8k2E'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'hu-tao',
    name: '胡桃',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/BzcRfrd.jpg',
        imgPopUrl: 'https://i.imgur.com/NB3Zaze.jpg',
        imgIconUrl: 'https://i.imgur.com/ArXQXwF.png',
        imgInfo: 'https://www.pixiv.net/artworks/92049927',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/hu-tao-pop.mp3',
        audioInfo: 'from Genshin Impact PC'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'lancee',
    name: '蘭希LanCee',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/Hb7eDiq.png',
        imgPopUrl: 'https://i.imgur.com/Wmt52Vf.png',
        imgIconUrl: 'https://i.imgur.com/j4osERO.png',
        imgInfo: 'https://www.youtube.com/watch?v=M7Ym_4ngeT8&t=2387s',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/lancee-pop.mp3',
        audioInfo: 'https://www.youtube.com/watch?v=M7Ym_4ngeT8&t=2387s'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'ayame',
    name: '百鬼あやめ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/fnkYIDH.jpg',
        imgPopUrl: 'https://i.imgur.com/gKremaa.jpg',
        imgIconUrl: 'https://i.imgur.com/8tZit6E.png',
        imgInfo: 'https://youtu.be/05VuFmvHjNY',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/ayame-yodazo.mp3',
        audioNormalUrl: 'https://softwaresing.github.io/popwaifu-file/audio/ayame-yodayo.mp3',
        audioInfo: 'https://youtu.be/05VuFmvHjNY & https://youtu.be/hlH6iNcEvq8'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'patra',
    name: '周防パトラ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/fngi9Il.png',
        imgPopUrl: 'https://i.imgur.com/H8J0BNy.png',
        imgIconUrl: 'https://i.imgur.com/waHRKCT.png',
        imgInfo: 'https://twitter.com/Patra_HNST/status/1431010128438784003',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/patra-pop.mp3',
        audioInfo: 'https://twitter.com/Patra_HNST/status/1429850594504679436'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'lumina',
    name: 'Lumina',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/0Yx8d1g.png',
        imgPopUrl: 'https://i.imgur.com/nyVDYir.png',
        imgIconUrl: 'https://i.imgur.com/QVVwFXT.png',
        imgInfo: 'https://youtu.be/1c2gGgQbbOE?t=207',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/lumina-pop.mp3',
        audioInfo: 'https://youtu.be/1c2gGgQbbOE?t=207'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'boru',
    name: '毬庫波爾',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/ecqpAXe.png',
        imgPopUrl: 'https://i.imgur.com/YyJTGT0.png',
        imgIconUrl: 'https://i.imgur.com/b4tgOmH.png',
        imgInfo: 'https://youtu.be/5cQn-G3PGMA',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/boru-pop.mp3',
        audioInfo: 'from herself'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'ryoko724',
    name: '神崎涼子',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/ekSYWDo.png',
        imgPopUrl: 'https://i.imgur.com/EhTSOxs.png',
        imgIconUrl: 'https://i.imgur.com/OAYNn7a.png',
        imgInfo: 'from herself',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/ryoko724-pop.mp3',
        audioInfo: 'from herself'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'catastrophe',
    name: '達克卡塔史託洛福',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/6nTxyZK.png',
        imgPopUrl: 'https://i.imgur.com/D8oG9Jv.png',
        imgIconUrl: 'https://i.imgur.com/1hU8uXK.png',
        imgInfo: 'from himself',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/catastrophe-pop.mp3',
        audioInfo: 'from himself'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'erokawasaya',
    name: '榎川幸',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/egDxILb.jpeg',
        imgPopUrl: 'https://i.imgur.com/XtcU0cz.jpeg',
        imgIconUrl: 'https://i.imgur.com/aUKEu1N.png',
        imgInfo: 'https://youtu.be/ZYY0Wq5NeE4?t=440',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/erokawasaya-pop.mp3',
        audioInfo: 'https://youtu.be/ZYY0Wq5NeE4?t=440'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'bianfubeite',
    name: '蝙蝠貝特',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/HfvXmUV.jpg',
        imgPopUrl: 'https://i.imgur.com/EoQhb1T.jpg',
        imgIconUrl: 'https://i.imgur.com/BXu3atD.png',
        imgInfo: 'from herself  https://www.facebook.com/profile.php?id=100072528154937',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/bianfubeite-pop.mp3',
        audioInfo: 'from herself'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'merak',
    name: '天璇',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/KbZMBUV.png',
        imgPopUrl: 'https://i.imgur.com/8qrf6qJ.png',
        imgIconUrl: 'https://i.imgur.com/8qrf6qJ.png',
        imgInfo: 'from herself',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/merak-pop.mp3',
        audioInfo: 'from herself'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'hasukiaoi',
    name: '狛井葵',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/K8x1fuM.png',
        imgPopUrl: 'https://i.imgur.com/sbfjOAl.png',
        imgIconUrl: 'https://i.imgur.com/3pcbucZ.png',
        imgInfo: 'from her discord server',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/hasukiaoi-pop.mp3',
        audioInfo: 'https://www.youtube.com/shorts/YUP6woQDBDc'
      },
      {
        modeName: 'black',
        imgNormalUrl: 'https://i.imgur.com/6vtP85m.png',
        imgPopUrl: 'https://i.imgur.com/IwEQa50.png',
        imgIconUrl: 'https://i.imgur.com/rrIerIu.png',
        imgInfo: 'from her discord server',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/hasukiaoi-black-pop.mp3',
        audioNormalUrl: 'https://softwaresing.github.io/popwaifu-file/audio/hasukiaoi-black-normal.mp3',
        audioInfo: 'https://youtu.be/DRSii5MqqD8?t=1251'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'aisu',
    name: '小林あいす',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/vmoBTtM.jpg',
        imgPopUrl: 'https://i.imgur.com/Wajbupw.png',
        imgIconUrl: 'https://i.imgur.com/Fz0RDlW.png',
        imgInfo: 'from https://twitter.com/kobayashi_aisu/status/1412802879358787592 & https://youtu.be/kiKTbtsywbs?t=4050',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/aisu-pop.mp3',
        audioInfo: 'https://youtu.be/tY9tPscDBVo'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'jotaro',
    name: '空条承太郎',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/iETbuuj.png',
        imgPopUrl: 'https://i.imgur.com/kYvJ3LN.png',
        imgIconUrl: 'https://i.imgur.com/12pGYEJ.png',
        imgInfo: 'https://youtu.be/M4OT_zxvcLc?t=22',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/jotaro-yakamashi.mp3',
        audioInfo: 'https://youtu.be/M4OT_zxvcLc?t=22'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'tcharuru',
    name: '天晴Haruru',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/ZiNYFL4.png',
        imgPopUrl: 'https://i.imgur.com/ZWmZAIp.png',
        imgIconUrl: 'https://i.imgur.com/GpS1irg.png',
        imgInfo: 'from himself',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/tcharuru-pop.mp3',
        audioInfo: 'from himself'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'moritsukireiyi',
    name: '森月澪依',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/cRRQADh.png',
        imgPopUrl: 'https://i.imgur.com/LwWwier.png',
        imgIconUrl: 'https://i.imgur.com/0aNcCOG.png',
        imgInfo: 'https://youtu.be/Oh7zaw108g8',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/moritsukireiyi-pop.mp3',
        audioInfo: 'https://youtu.be/Oh7zaw108g8?t=1'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'uto',
    name: '天使うと',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/DpoiSoe.png',
        imgPopUrl: 'https://i.imgur.com/Ivy7P4o.png',
        imgIconUrl: 'https://i.imgur.com/DpoiSoe.png',
        imgInfo: 'https://youtu.be/mH3JaxvyNj4',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/uto-pop.mp3',
        audioInfo: 'from her stream (not sure which time)'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'emerald',
    name: 'Emerald',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/WcJL5Um.png',
        imgPopUrl: 'https://i.imgur.com/vidXcRm.png',
        imgIconUrl: 'https://i.imgur.com/1Jy6K9i.png',
        imgInfo: 'from herself ( https://twitter.com/Emerald_ch_ )',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/emerald-pop.mp3',
        audioInfo: 'from herself'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'pomu',
    name: '波姆',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/NL71Aig.png',
        imgPopUrl: 'https://i.imgur.com/VMLdSR4.jpg',
        imgIconUrl: 'https://i.imgur.com/thI1cmp.png',
        imgInfo: 'https://twitter.com/Otter_Pomu/status/1416707720430850055 & https://drive.google.com/drive/folders/1egozBgLf-GgnLCjJt20KexV8E7-ow-2u',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/pomu-pop.mp3',
        audioInfo: 'https://youtu.be/Ak-jkujxHDc?t=6682'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'boureirabbi',
    name: '紡霊拉比',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/hS5j1nl.png',
        imgPopUrl: 'https://i.imgur.com/9znI7VY.png',
        imgIconUrl: 'https://i.imgur.com/McKysPx.png',
        imgInfo: 'from herself',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/boureirabbi-pop.mp3',
        audioInfo: 'https://youtu.be/JdJAU8hTHYc?t=2'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'linglan',
    name: '森森鈴蘭',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/xwGmGln.png',
        imgPopUrl: 'https://i.imgur.com/jnWdBqj.png',
        imgIconUrl: 'https://i.imgur.com/ay0cp6X.png',
        imgInfo: 'https://youtu.be/RkfzhWcSX2I?t=1301',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/linglan-never-up-1.mp3',
        audioInfo: 'https://youtu.be/RkfzhWcSX2I?t=1355'
      },
      {
        modeName: 'up-down',
        imgNormalUrl: 'https://i.imgur.com/xwGmGln.png',
        imgPopUrl: 'https://i.imgur.com/jnWdBqj.png',
        imgIconUrl: 'https://i.imgur.com/ay0cp6X.png',
        imgInfo: 'https://youtu.be/RkfzhWcSX2I?t=1301',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/linglan-never-up-1.mp3',
        audioNormalUrl: 'https://softwaresing.github.io/popwaifu-file/audio/linglan-never-up-2.mp3',
        audioInfo: 'https://youtu.be/RkfzhWcSX2I?t=1355'
      },
      {
        modeName: 'never-gonna-give',
        imgNormalUrl: 'https://i.imgur.com/xwGmGln.png',
        imgPopUrl: 'https://i.imgur.com/jnWdBqj.png',
        imgIconUrl: 'https://i.imgur.com/ay0cp6X.png',
        imgInfo: 'https://youtu.be/RkfzhWcSX2I?t=1301',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/linglan-never-gonna-give-1.mp3',
        audioNormalUrl: 'https://softwaresing.github.io/popwaifu-file/audio/linglan-never-gonna-give-2.mp3',
        audioInfo: 'https://youtu.be/RkfzhWcSX2I?t=1478'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'ukuruniru',
    name: '烏庫魯尼魯',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/RB6Q5b8.jpg',
        imgPopUrl: 'https://i.imgur.com/YHxe0ec.jpg',
        imgIconUrl: 'https://i.imgur.com/EUnsA4i.png',
        imgInfo: 'https://youtu.be/aXq2HOvJgS8?t=62',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/ukuruniru-pop.mp3',
        audioInfo: 'https://youtu.be/aXq2HOvJgS8?t=62'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'kazari-lua',
    name: '風莉ルア',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/niAd6BV.jpg',
        imgPopUrl: 'https://i.imgur.com/8jAsS6R.jpg',
        imgIconUrl: 'https://i.imgur.com/1xnjioc.png',
        imgInfo: 'https://twitter.com/Kazari_Lua/status/1415258802459344909 & https://twitter.com/Kazari_Lua/status/1422515979804758018'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'hennnisu',
    name: 'Hennnisu',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/lWmVLGD.png',
        imgPopUrl: 'https://i.imgur.com/qaSCOM8.jpg',
        imgIconUrl: 'https://i.imgur.com/qcbFxG3.png',
        imgInfo: 'https://youtu.be/gORMDWE9zVQ?t=226',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/hennnisu-pop.mp3',
        audioInfo: 'https://youtu.be/gORMDWE9zVQ?t=226'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'rushia',
    name: '潤羽るしあ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/RiZ2Z7y.jpg',
        imgPopUrl: 'https://i.imgur.com/c032cmY.jpg',
        imgIconUrl: 'https://i.imgur.com/440PpSX.png',
        imgInfo: 'https://twitter.com/uruharushia/status/1375032797623066624',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/rushia-pop.mp3',
        audioInfo: 'https://youtu.be/mgEzgLovw8U?t=3943'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'elira',
    name: 'Elira Pendora',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/g7AAg1Z.png',
        imgPopUrl: 'https://i.imgur.com/98RqHYy.png',
        imgIconUrl: 'https://i.imgur.com/TxMkUw3.png',
        imgInfo: 'https://youtu.be/8NDzqxHzKcU',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/elira-pop.mp3',
        audioInfo: 'https://youtu.be/SxIYv3er4c0'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'arisuaha',
    name: '夢姬(ありす)',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/bnJLGZ7.png',
        imgPopUrl: 'https://i.imgur.com/JCTWcoz.png',
        imgIconUrl: 'https://i.imgur.com/kbPHvSa.png',
        imgInfo: 'from herself',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/arisuaha-pop.mp3',
        audioInfo: 'https://youtu.be/y5VW-76MclY'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'tomoe-shirayuki',
    name: '白雪巴',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/CIk57SG.jpg',
        imgPopUrl: 'https://i.imgur.com/lrWsNet.jpeg',
        imgIconUrl: 'https://i.imgur.com/iynwQlM.png',
        imgInfo: 'from twitter but not sure which tweet ( https://twitter.com/Tomoe_Shirayuki )',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/tomoe-shirayuki-pop-1.mp3',
        audioInfo: 'https://youtu.be/pGSfEs3ZDDE?t=1423'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'yumeri',
    name: '夢理',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/yLrN3Yl.png',
        imgPopUrl: 'https://i.imgur.com/667cSif.png',
        imgIconUrl: 'https://i.imgur.com/rw0fde5.png',
        imgInfo: 'from herself',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/yumeri-pop.mp3',
        audioInfo: 'from herself'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'rumii',
    name: '如月ルミィ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/9fKueaa.png',
        imgPopUrl: 'https://i.imgur.com/nr1vbfi.png',
        imgIconUrl: 'https://i.imgur.com/jhKFU43.png',
        imgInfo: 'https://youtu.be/1PooiwI_sK4?t=3228',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/rumii-pop.mp3',
        audioInfo: 'https://youtu.be/29Bv0SIUCw0?t=432'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'poruko',
    name: '黒井夜子',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/W90hprs.jpeg',
        imgPopUrl: 'https://i.imgur.com/lwIum9B.jpeg',
        imgIconUrl: 'https://i.imgur.com/VfVm5SQ.png',
        imgInfo: 'from herself',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/poruko-pop.mp3',
        audioInfo: 'from herself'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'batsu',
    name: '荒幽ばつ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/PXrh3CT.png',
        imgPopUrl: 'https://i.imgur.com/uVQmDkk.png',
        imgIconUrl: 'https://i.imgur.com/8ouXBU8.png',
        imgInfo: 'from himself',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/batsu-pop.mp3',
        audioInfo: 'from himself'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'beimu',
    name: '唄姆·拉奇亞',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/Rn8UVJQ.png',
        imgPopUrl: 'https://i.imgur.com/zX6nRcY.png',
        imgIconUrl: 'https://i.imgur.com/Rn8UVJQ.png',
        imgInfo: 'https://youtu.be/F-NKP2G2Q1Q & https://youtu.be/9mloZJYj51E'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'heanna-sumire',
    name: '平安名 すみれ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/gqZIR2l.png',
        imgPopUrl: 'https://i.imgur.com/L2bNPYl.jpeg',
        imgIconUrl: 'https://i.imgur.com/CfCOHAi.png',
        imgInfo: 'https://www.lovelive-anime.jp/yuigaoka/member/',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/heanna-sumire-pop.mp3',
        audioInfo: 'https://youtu.be/R2_-weLoIA8'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'kaina',
    name: '灰名Kaina',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/ECPKS1V.jpg',
        imgPopUrl: 'https://i.imgur.com/QcoKGwg.jpg',
        imgIconUrl: 'https://i.imgur.com/zxRAgzx.png',
        imgInfo: 'https://youtu.be/vJTj3ydunlU?t=5',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/kaina-pop.mp3',
        audioInfo: 'https://youtu.be/lh_pwXsFLhE'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'mya',
    name: '米亞Mya',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/x3XRtAh.png',
        imgPopUrl: 'https://i.imgur.com/rk4EH8I.png',
        imgIconUrl: 'https://i.imgur.com/F78vJKs.png',
        imgInfo: 'https://youtu.be/DYOwcC9x3Vs',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/mya-pop.mp3',
        audioInfo: 'https://youtu.be/JETAq8w-8DA?t=6165'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'mafumafu',
    name: 'まふまふ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/26oqRS4.jpg',
        imgPopUrl: 'https://i.imgur.com/FYNtqsd.png',
        imgIconUrl: 'https://i.imgur.com/85Yl9O6.png',
        imgInfo: 'https://youtu.be/xrDruN69QCw',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/mafumafu-pop.mp3',
        audioInfo: 'https://youtu.be/xrDruN69QCw'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: '04',
    name: '零肆04',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/JGvio6g.jpeg',
        imgPopUrl: 'https://i.imgur.com/aAYd2UM.jpeg',
        imgIconUrl: 'https://i.imgur.com/Z49V1VN.png',
        imgInfo: 'from her dc server',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/04-ara.mp3',
        audioInfo: 'https://www.youtube.com/channel/UCNZyvI_TjyJyBVtdHEsO7HA'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'kurita',
    name: '鼠屋栗太',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/c640G1h.png',
        imgPopUrl: 'https://i.imgur.com/jD3mDiu.png',
        imgIconUrl: 'https://i.imgur.com/c640G1h.png',
        imgInfo: 'https://youtu.be/HXvQlvn2yIk'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'akina',
    name: '三枝明那',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/UwnbrCt.png',
        imgPopUrl: 'https://i.imgur.com/VyHgNeA.png',
        imgIconUrl: 'https://i.imgur.com/64TFeW5.png',
        imgInfo: 'https://twitter.com/333akina/status/1318927020126990336',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/akina-pop.mp3',
        audioInfo: 'https://youtu.be/QHUnceexHCE'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'sukoya',
    name: '健屋花那',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/LzS580a.jpeg',
        imgPopUrl: 'https://i.imgur.com/e0Snp2u.jpeg',
        imgIconUrl: 'https://i.imgur.com/WPRY3W8.png',
        imgInfo: 'https://youtu.be/APCKILJjG-o 8:59 & 9:20',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/sukoya-pop.mp3',
        audioInfo: 'from stream'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'speedwagon',
    name: 'Robert E. O. Speedwagon',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/b6nr5Kg.jpeg',
        imgPopUrl: 'https://i.imgur.com/xfAWnX4.jpeg',
        imgIconUrl: 'https://i.imgur.com/xfAWnX4.jpeg',
        imgInfo: 'JOJO 1'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'akito',
    name: '緋佐あきと',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/DLX6TF2.png',
        imgPopUrl: 'https://i.imgur.com/AwYMf6U.png',
        imgIconUrl: 'https://i.imgur.com/i2j5rhu.png',
        imgInfo: '',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/akito-pop.mp3',
        audioInfo: 'https://youtu.be/vGz-FpQE5Eo'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'hkmkmui',
    name: 'MK妹',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/yVz3gok.png',
        imgPopUrl: 'https://i.imgur.com/cAggpkt.png',
        imgIconUrl: 'https://i.imgur.com/uonmjO3.png',
        imgInfo: 'https://www.youtube.com/channel/UCO62chyehk6pX7OitrnJAUg/',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/hkmkmui-pop.mp3',
        audioInfo: 'https://youtu.be/iNWmaKPzgII?t=71'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'ibrahim',
    name: 'イブラヒム',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/PH5gOfL.jpeg',
        imgPopUrl: 'https://i.imgur.com/DtavimR.jpeg',
        imgIconUrl: 'https://i.imgur.com/PH5gOfL.jpeg',
        imgInfo: 'https://youtu.be/IsmFpgGWGKg',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/ibrahim-pop.mp3',
        audioInfo: 'https://youtu.be/SQiS_N1ZDjI'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'haruka',
    name: '星見遙',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/oyyO7au.jpeg',
        imgPopUrl: 'https://i.imgur.com/5xRfTIj.jpeg',
        imgIconUrl: 'https://i.imgur.com/ml43yZw.png',
        imgInfo: 'https://youtu.be/P8cbbfidqM4?t=14709',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/haruka-pop.mp3',
        audioInfo: 'https://youtu.be/d1O21n5SZmE'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'venti',
    name: '溫迪',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/rvkaR7p.jpeg',
        imgPopUrl: 'https://i.imgur.com/3HzPBTM.jpeg',
        imgIconUrl: 'https://i.imgur.com/bh0mIlh.png',
        imgInfo: 'from Genshin Impact screenshot',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/venti-pop.mp3',
        audioInfo: 'https://youtu.be/nz6iiDsyZGM'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'kusaka-ice',
    name: '日下 氷 KusakaICE',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/0tx8Y2t.png',
        imgPopUrl: 'https://i.imgur.com/Y8M3gMx.png',
        imgIconUrl: 'https://i.imgur.com/UyOXnhz.png',
        imgInfo: 'https://youtu.be/cDRqfwbmiRo',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/kusaka-ice-pop.mp3',
        audioInfo: 'https://youtu.be/sDA1GBdCmSs'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'kai-mayuzumi',
    name: '黛灰',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/EoUVnz2.png',
        imgPopUrl: 'https://i.imgur.com/0CJIza0.png',
        imgIconUrl: 'https://i.imgur.com/6S52lw8.png',
        imgInfo: 'https://youtu.be/EJhbV2CAiM4'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'fengxu',
    name: '風絮',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/VKIKzBm.png',
        imgPopUrl: 'https://i.imgur.com/4WqWY2W.png',
        imgIconUrl: 'https://i.imgur.com/ybHjD4M.png',
        imgInfo: 'https://youtu.be/rwt1o8OPBT0 24：24 & 24：28',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/fengxu-pop.mp3',
        audioInfo: 'from his discord server'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'veibae',
    name: 'Veibae',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/ZxWNJcR.png',
        imgPopUrl: 'https://i.imgur.com/Zd1e0ew.png',
        imgIconUrl: 'https://i.imgur.com/3pEof1O.png',
        imgInfo: 'https://youtu.be/QAuu7FuKCec?t=169',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/veibae-pop.mp3',
        audioInfo: 'https://youtu.be/QAuu7FuKCec?t=170'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'ina',
    name: 'Ninomae Ina\'nis',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/oVcJL6F.jpeg',
        imgPopUrl: 'https://i.imgur.com/wQrOpnU.jpeg',
        imgIconUrl: 'https://i.imgur.com/48YijDf.png',
        imgInfo: 'https://youtu.be/tAvOULiZuHQ?t=12',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/ina-wah.mp3',
        audioInfo: 'https://youtu.be/rqSxHrplZ34?t=174'
      },
      {
        modeName: '2',
        imgNormalUrl: 'https://i.imgur.com/oVcJL6F.jpeg',
        imgPopUrl: 'https://i.imgur.com/wQrOpnU.jpeg',
        imgIconUrl: 'https://i.imgur.com/48YijDf.png',
        imgInfo: 'https://youtu.be/tAvOULiZuHQ?t=12',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/ina-1.mp3',
        audioNormalUrl: 'https://softwaresing.github.io/popwaifu-file/audio/ina-2.mp3',
        audioInfo: 'https://youtu.be/tAvOULiZuHQ'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'hyakuya-shirotori',
    name: '百夜白鳥',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/sjojGOa.png',
        imgPopUrl: 'https://i.imgur.com/sFbCioR.png',
        imgIconUrl: 'https://i.imgur.com/icF9DZg.png',
        imgInfo: 'https://youtu.be/HI2tkTk0hYI',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/hyakuya-shirotori-pop.mp3',
        audioInfo: 'https://youtu.be/HI2tkTk0hYI?t=8941'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'inori',
    name: '秋月イノリ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/zRvoxhy.png',
        imgPopUrl: 'https://i.imgur.com/drkYYgt.png',
        imgIconUrl: 'https://i.imgur.com/Ayx86kB.png',
        imgInfo: '',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/inori-pop.mp3',
        audioInfo: 'https://youtu.be/rnNWiZAUsws'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'polka',
    name: '尾丸ポルカ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/IZGgEkT.png',
        imgPopUrl: 'https://i.imgur.com/Pq1eF9w.png',
        imgIconUrl: 'https://i.imgur.com/xd1I4b8.png',
        imgInfo: 'https://youtu.be/Fgm_f6pO0uM?t=10',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/polka-pop.mp3',
        audioInfo: 'https://youtu.be/Fgm_f6pO0uM'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'dollaeggtartv',
    name: 'Dolla朵拉',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/kdVYw9n.png',
        imgPopUrl: 'https://i.imgur.com/VD53ZYR.png',
        imgIconUrl: 'https://i.imgur.com/u9UhbkA.png',
        imgInfo: 'https://youtu.be/wZfUCflpf4E',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/dollaeggtartv-pop.mp3',
        audioInfo: 'https://youtu.be/wZfUCflpf4E'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'jhu-dao',
    name: '朱道',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/j9z7tZ8.jpeg',
        imgPopUrl: 'https://i.imgur.com/LmeFkRc.jpeg',
        imgIconUrl: 'https://i.imgur.com/OPRVmOC.png',
        imgInfo: 'https://youtu.be/y-nP-BGBRaQ?t=2778',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/jhu-dao-pop.mp3',
        audioInfo: 'https://youtu.be/-2_lnEewp7U?t=9367'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'katosparrow',
    name: '加藤小麻雀',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/cba60DG.png',
        imgPopUrl: 'https://i.imgur.com/0R3Hrmt.png',
        imgIconUrl: 'https://i.imgur.com/cba60DG.png',
        imgInfo: 'https://youtu.be/gHompc-T0o8?t=1996',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/katosparrow-pop.mp3',
        audioInfo: 'https://youtu.be/1KPefG31JEs?t=1352'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'belmond-banderas',
    name: 'ベルモンド・バンデラス',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/PiZFIHQ.jpeg',
        imgPopUrl: 'https://i.imgur.com/jODoT7u.jpeg',
        imgIconUrl: 'https://i.imgur.com/ngJEfGx.png',
        imgInfo: 'https://youtu.be/25h0GVgYCPs?t=4132',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/belmond-banderas-a.mp3',
        audioInfo: 'https://youtu.be/JOBCw4E6tP0'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'calli',
    name: 'Mori Calliope',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/WhTx9ct.jpeg',
        imgPopUrl: 'https://i.imgur.com/4VqiJar.jpeg',
        imgIconUrl: 'https://i.imgur.com/4VqiJar.jpeg',
        imgInfo: 'https://knowyourmeme.com/memes/people/mori-calliope/ & https://soundcloud.com/mtell/calliope-mori-rip-mtell-remix',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/calli-pop.mp3',
        audioInfo: 'https://youtu.be/zxVgPS_sMjM'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'texas',
    name: '德克薩斯',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/3Gm1rCP.jpeg',
        imgPopUrl: 'https://i.imgur.com/66SkW00.jpeg',
        imgIconUrl: 'https://i.imgur.com/wDggRPJ.png',
        imgInfo: 'Arknights official picture',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/texas-pop.mp3',
        audioInfo: 'from Arknights game sound'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'mochitsugi-luna',
    name: '望月ルーナ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/48FUnll.png',
        imgPopUrl: 'https://i.imgur.com/eY2GOLD.png',
        imgIconUrl: 'https://i.imgur.com/GXjAEhF.png',
        imgInfo: 'from vt ( https://twitter.com/luna_mochitsugi )',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/mochitsugi-luna-pop.mp3',
        audioInfo: 'https://youtu.be/wOhgSsoy-y0?t=4570'
      },
      {
        modeName: 'cat',
        imgNormalUrl: 'https://i.imgur.com/LbgJOnC.png',
        imgPopUrl: 'https://i.imgur.com/5Visr31.png',
        imgIconUrl: 'https://i.imgur.com/8byXuRY.png',
        imgInfo: 'from vt ( https://twitter.com/luna_mochitsugi )',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/mochitsugi-luna-pop.mp3',
        audioInfo: 'https://youtu.be/wOhgSsoy-y0?t=4570'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'enn',
    name: 'Enn Sings',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/NCiK3Q2.png',
        imgPopUrl: 'https://i.imgur.com/lL7vZbg.png',
        imgIconUrl: 'https://i.imgur.com/NCiK3Q2.png',
        imgInfo: 'https://youtu.be/7txXTRX2oe8?t=3',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/enn-1.mp3',
        audioNormalUrl: 'https://softwaresing.github.io/popwaifu-file/audio/enn-2.mp3',
        audioInfo: 'https://youtu.be/ShXRVPLFdxo?t=2525 & https://youtu.be/h1Dr4B3rBII?t=2683'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'kagamihayato',
    name: '加賀美 ハヤト',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/YgeXyUZ.png',
        imgPopUrl: 'https://i.imgur.com/SvzuxPA.png',
        imgIconUrl: 'https://i.imgur.com/YgeXyUZ.png',
        imgInfo: 'https://zh.moegirl.org.cn/%E5%8A%A0%E8%B4%BA%E7%BE%8E%E9%9A%BC%E4%BA%BA',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/kagamihayato-pop.mp3',
        audioInfo: 'https://youtu.be/4-jpsUKO50I?t=50'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'shien',
    name: '影山シエン',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/wmhlzK3.png',
        imgPopUrl: 'https://i.imgur.com/ZfDIW7Q.png',
        imgIconUrl: 'https://i.imgur.com/dpwLvVm.png',
        imgInfo: 'https://youtu.be/fLC438LIDwE 18:35 ＆ 19:37',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/shien-pop.mp3',
        audioInfo: 'https://youtu.be/sA6o0aTnn1w'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'noel',
    name: '白銀ノエル',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/5XRGCn8.jpg',
        imgPopUrl: 'https://i.imgur.com/wYmnRYS.jpg',
        imgIconUrl: 'https://i.imgur.com/Q7G5BKK.png',
        imgInfo: 'https://twitter.com/illustr_speaker/status/1434835933828829188 & https://twitter.com/shiroganenoel/status/1437024594896965639',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/noel-a.mp3',
        audioInfo: 'https://youtu.be/RE73Alg-2WQ'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'yuma-tsukumo',
    name: '九十九遊馬',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/8ekGM2G.jpg',
        imgPopUrl: 'https://i.imgur.com/xOojm31.png',
        imgIconUrl: 'https://i.imgur.com/JxUbOI4.png',
        imgInfo: 'https://twitter.com/KonamiUK/status/1310862999968776 & https://yugioh.fandom.com/wiki/ZEXAL_(Duel_Links)',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/yuma-tsukumo-pop.mp3',
        audioInfo: 'https://youtu.be/R5MrpJ3NN8c'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: '4virtual-tedobear',
    name: '4Virtual TedoBear 泰多貝亞',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/I9ekJWq.png',
        imgPopUrl: 'https://i.imgur.com/dj2pfZh.png',
        imgIconUrl: 'https://i.imgur.com/dj2pfZh.png',
        imgInfo: 'https://www.youtube.com/c/4VirtualTedoBear%E6%B3%B0%E5%A4%9A%E8%B2%9D%E4%BA%9E',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/4virtual-tedobear-pop.mp3',
        audioInfo: 'from his discord server'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'otoki',
    name: '音軌オトキ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/PZMinL0.png',
        imgPopUrl: 'https://i.imgur.com/6AvHjKu.png',
        imgIconUrl: 'https://i.imgur.com/HvjiPAC.png',
        imgInfo: 'https://youtu.be/91EH1QqQGOo',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/otoki-pop-1.mp3',
        audioInfo: 'https://youtu.be/Gs4fLsT7Sa4'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'gaku-fushimi',
    name: '伏見ガク',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/skOkNdc.png',
        imgPopUrl: 'https://i.imgur.com/Yqf0lgY.png',
        imgIconUrl: 'https://i.imgur.com/fmZGCIK.png',
        imgInfo: 'https://www.nijisanji.jp/members/gaku-fushimi & https://twitter.com/gaku_fushimi/status/1048229997553496064',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/gaku-fushimi-pop.mp3',
        audioInfo: 'https://youtu.be/dXEotJJGb5I'
      },
      {
        modeName: '2',
        imgNormalUrl: 'https://i.imgur.com/ljuO1ak.jpeg',
        imgPopUrl: 'https://i.imgur.com/CPofd9d.jpeg',
        imgIconUrl: 'https://i.imgur.com/aK9t9pW.png',
        imgInfo: 'https://youtu.be/f_T8M75ACZ8 38:08 & 55:10',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/gaku-fushimi-2-pop.mp3',
        audioInfo: 'https://youtu.be/FfWSRPfs16s'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'nene',
    name: '桃鈴ねね',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/KKECSds.png',
        imgPopUrl: 'https://i.imgur.com/ubcdrpZ.png',
        imgIconUrl: 'https://i.imgur.com/IpfR7CO.png',
        imgInfo: 'https://youtu.be/oSrcIh-_4VE?t=524 & https://youtu.be/oSrcIh-_4VE?t=462',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/nene-seal-ow1.mp3',
        audioNormalUrl: 'https://softwaresing.github.io/popwaifu-file/audio/nene-seal-slap.mp3',
        audioInfo: 'https://youtu.be/_BqDWHzripE?t=10724'
      },
      {
        modeName: '2',
        imgNormalUrl: 'https://i.imgur.com/KKECSds.png',
        imgPopUrl: 'https://i.imgur.com/ubcdrpZ.png',
        imgIconUrl: 'https://i.imgur.com/IpfR7CO.png',
        imgInfo: 'https://youtu.be/oSrcIh-_4VE?t=524 & https://youtu.be/oSrcIh-_4VE?t=462',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/nene-seal-ow2.mp3',
        audioNormalUrl: 'https://softwaresing.github.io/popwaifu-file/audio/nene-seal-slap.mp3',
        audioInfo: 'https://youtu.be/jQMdS0Jlql4?t=9671'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'pekora',
    name: '兎田ぺこら',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/LE0MF2t.png',
        imgPopUrl: 'https://i.imgur.com/g26gl5p.png',
        imgIconUrl: 'https://i.imgur.com/IYYOtV1.png',
        imgInfo: 'https://youtu.be/D9mQf56453I?t=1043 & https://youtu.be/D9mQf56453I?t=1067',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/pekora-peko.mp3',
        audioInfo: 'https://youtu.be/ZCjV0CL7evQ?t=10033'
      },
      {
        modeName: 'domo',
        imgNormalUrl: 'https://i.imgur.com/5KeAAB6.png',
        imgPopUrl: 'https://i.imgur.com/Wr5xs1t.png',
        imgIconUrl: 'https://i.imgur.com/my2tS86.png',
        imgInfo: 'https://youtu.be/dNZ5mCX2Eds?t=283 & https://youtu.be/dNZ5mCX2Eds?t=9046',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/pekora-domo-amo.mp3',
        audioNormalUrl: 'https://softwaresing.github.io/popwaifu-file/audio/pekora-domo-do.mp3',
        audioInfo: 'https://youtu.be/NZpCdpjuAB0?t=120'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'woof-woffle',
    name: '嗚夫沃夫',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/W0nKrsD.png',
        imgPopUrl: 'https://i.imgur.com/7AP03y9.png',
        imgIconUrl: 'https://i.imgur.com/WJC0aof.png',
        imgInfo: 'https://youtu.be/Q3PQFGXMTIM?t=1429',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/woof-woffle-pop.mp3',
        audioInfo: 'unknow'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'mikotosatsuki5',
    name: '水琴五月',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/cIox86r.jpg',
        imgPopUrl: 'https://i.imgur.com/HVCbvhf.jpg',
        imgIconUrl: 'https://i.imgur.com/UPS9x9W.png',
        imgInfo: 'https://youtu.be/In163jajImU',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/mikotosatsuki5-pop-1.mp3',
        audioInfo: 'https://youtu.be/In163jajImU'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'temma',
    name: '岸堂天真',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/rc29QWY.jpeg',
        imgPopUrl: 'https://i.imgur.com/ktkhhro.jpeg',
        imgIconUrl: 'https://i.imgur.com/s7hnCM8.png',
        imgInfo: 'https://youtu.be/BXZExVa8mWw?t=2053',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/temma-pop.mp3',
        audioInfo: 'https://youtu.be/BXZExVa8mWw?t=2053'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'kakeru-yumeoi',
    name: '夢追翔',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/5iiAXrA.png',
        imgPopUrl: 'https://i.imgur.com/8UhFqoM.png',
        imgIconUrl: 'https://i.imgur.com/dmrMVG2.png',
        imgInfo: 'https://youtu.be/aa8uvG2mENg?t=2865',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/kakeru-yumeoi-pop.mp3',
        audioInfo: 'https://youtu.be/Y5BH8by8P0Y'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'adano',
    name: '雅達諾',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/FCpDkUc.png',
        imgPopUrl: 'https://i.imgur.com/n1HAbd8.png',
        imgIconUrl: 'https://i.imgur.com/FCpDkUc.png',
        imgInfo: 'from himself ( https://twitter.com/Adano1124 )',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/adano-pop.mp3',
        audioInfo: 'from himself'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'miyabi',
    name: '花咲みやび',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/r2Z5lC0.png',
        imgPopUrl: 'https://i.imgur.com/6IhKWE3.jpg',
        imgIconUrl: 'https://i.imgur.com/r2Z5lC0.png',
        imgInfo: 'https://youtu.be/wpZ7WKdKzYs?t=5753 & https://twitter.com/miyabihanasaki/status/1352270151794585603',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/miyabi-pop.mp3',
        audioInfo: 'https://youtu.be/q6TctPzm0gc?t=2690'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'cheukcat',
    name: '綽貓喵',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/DYI8BrY.png',
        imgPopUrl: 'https://i.imgur.com/vMRTHsW.png',
        imgIconUrl: 'https://i.imgur.com/6HBSnD6.png',
        imgInfo: 'https://youtu.be/K1IoGZmA3aw?t=2950',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/cheukcat1.mp3',
        audioNormalUrl: 'https://softwaresing.github.io/popwaifu-file/audio/cheukcat2.mp3',
        audioInfo: 'https://youtu.be/K1IoGZmA3aw?t=2950'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'astel',
    name: 'アステル・レダ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/DpTCLTT.jpg',
        imgPopUrl: 'https://i.imgur.com/qgfiK2s.jpg',
        imgIconUrl: 'https://i.imgur.com/tZc2L2l.png',
        imgInfo: 'https://youtu.be/n0lGTyvTE8w?t=493 & https://youtu.be/n0lGTyvTE8w?t=714',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/astel-pop.mp3',
        audioInfo: 'https://youtu.be/D1g3BNbbDsw?t=1970'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'canis',
    name: '阿狗Canis',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/RY8uO0R.jpg',
        imgPopUrl: 'https://i.imgur.com/R1n5vEN.jpg',
        imgIconUrl: 'https://i.imgur.com/RY8uO0R.jpg',
        imgInfo: 'https://youtu.be/q9KuTDMfMow?t=4857',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/canis-pop.mp3',
        audioInfo: 'https://youtu.be/WsngdvtmngE'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'yumesakimia',
    name: '夢咲ミア',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/S80qEJN.png',
        imgPopUrl: 'https://i.imgur.com/pHR73Hh.png',
        imgIconUrl: 'https://i.imgur.com/S80qEJN.png',
        imgInfo: 'https://youtu.be/5pHBtyO4xNU 0:13 & 0:03',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/yumesakimia-pop.mp3',
        audioInfo: 'https://youtu.be/5pHBtyO4xNU'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'oliver-evans',
    name: 'オリバー・エバンス',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/2A1aZ92.jpg',
        imgPopUrl: 'https://i.imgur.com/bhvvmG3.jpg',
        imgIconUrl: 'https://i.imgur.com/p1AmjtU.png',
        imgInfo: 'https://youtu.be/xUJJF6fbSR8?t=1349'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'suisei',
    name: '星街すいせい',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/AG0J0Tp.png',
        imgPopUrl: 'https://i.imgur.com/TPluqIa.png',
        imgIconUrl: 'https://i.imgur.com/JzWtwku.png',
        imgInfo: 'https://youtu.be/hq-AsszEZIo',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/suisei-pop.mp3',
        audioInfo: 'https://youtu.be/hq-AsszEZIo'
      },
      {
        modeName: 'kyomo',
        imgNormalUrl: 'https://i.imgur.com/ToPppcW.png',
        imgPopUrl: 'https://i.imgur.com/An7qbno.png',
        imgIconUrl: 'https://i.imgur.com/6weT0Ex.png',
        imgInfo: 'https://youtu.be/HZmPB0f3cbI?t=53',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/suisei-kyomo.mp3',
        audioNormalUrl: 'https://softwaresing.github.io/popwaifu-file/audio/suisei-kawaii.mp3',
        audioInfo: 'https://youtu.be/Xn6fzMAOZFs?t=194 & https://youtu.be/i7oDE-5Q-5o?t=275'
      },
      {
        modeName: 'ressha',
        imgNormalUrl: 'https://i.imgur.com/xy2RLDJ.png',
        imgPopUrl: 'https://i.imgur.com/7EoGqLX.png',
        imgIconUrl: 'https://i.imgur.com/bvF03rT.png',
        imgInfo: 'https://youtu.be/ZWTuQnb9wq0?t=21 & https://youtu.be/ZWTuQnb9wq0?t=25',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/suisei-ressha-shu1.mp3',
        audioNormalUrl: 'https://softwaresing.github.io/popwaifu-file/audio/suisei-ressha-shu2.mp3',
        audioInfo: 'https://youtu.be/KGj0re0whzA?t=2214'
      },
      {
        modeName: 'hi-honey',
        imgNormalUrl: 'https://i.imgur.com/fxjCnhH.png',
        imgPopUrl: 'https://i.imgur.com/w4OJI3r.png',
        imgIconUrl: 'https://i.imgur.com/tKNPCai.png',
        imgInfo: 'https://youtu.be/VTyhCpNSMtc',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/suisei-hi-honey-hi.mp3',
        audioNormalUrl: 'https://softwaresing.github.io/popwaifu-file/audio/suisei-hi-honey-honey.mp3',
        audioInfo: 'https://youtu.be/MvaMY_92T-c?t=3932'
      },
      {
        modeName: 'hehehe',
        imgNormalUrl: 'https://i.imgur.com/EjUIZDb.png',
        imgPopUrl: 'https://i.imgur.com/KGaBnA4.png',
        imgIconUrl: 'https://i.imgur.com/D44zTwd.png',
        imgInfo: 'https://youtu.be/mqr1eP25vg4?t=205 & https://youtu.be/mqr1eP25vg4?t=1357',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/suisei-hehehe1.mp3',
        audioNormalUrl: 'https://softwaresing.github.io/popwaifu-file/audio/suisei-hehehe2.mp3',
        audioInfo: 'https://suisei.moe/ & https://github.com/suisei-cn/sbtn-assets/blob/d51be385f10ebb7d4f89dec9cb2ba9d1efb0ade4/assets/ehhh.mp3'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'ame',
    name: 'Watson Amelia',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/qKszJAy.jpeg',
        imgPopUrl: 'https://i.imgur.com/MzewfJb.jpeg',
        imgIconUrl: 'https://i.imgur.com/qKszJAy.jpeg',
        imgInfo: '',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/ame-weee.mp3',
        audioInfo: 'https://youtu.be/f2lYmGRQq9M?t=1207'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'lei-on-lion',
    name: '莉安Lion',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/AsHGNUz.jpg',
        imgPopUrl: 'https://i.imgur.com/hYfQXpL.jpg',
        imgIconUrl: 'https://i.imgur.com/5K6BKvT.png',
        imgInfo: 'from her discord server',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/lei-on-lion-pop.mp3',
        audioInfo: 'https://youtu.be/HDaJXxvmDmE'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'megumin',
    name: 'めぐみん',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/s8H5dIH.jpg',
        imgPopUrl: 'https://i.imgur.com/ndhrghU.png',
        imgIconUrl: 'https://i.imgur.com/lH5CqtV.png',
        imgInfo: 'https://youtu.be/eKEgWoxSLl4?t=6 & https://youtu.be/Q4FQUMcYqiQ?t=10',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/megumin-explosion.mp3',
        audioInfo: 'https://youtu.be/Q4FQUMcYqiQ?t=2'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'aqua',
    name: 'あくあ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/P8KGJFp.jpg',
        imgPopUrl: 'https://i.imgur.com/mc2h9sC.jpg',
        imgIconUrl: 'https://i.imgur.com/tBvuWEC.png',
        imgInfo: '',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/aqua-pop.mp3',
        audioInfo: 'https://youtu.be/HjjKAsi6pis?t=57'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'watame',
    name: '角巻わため',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/tiTPdnY.png',
        imgPopUrl: 'https://i.imgur.com/e7W3LdL.png',
        imgIconUrl: 'https://i.imgur.com/ZnXi79M.png',
        imgInfo: 'https://virtualyoutuber.fandom.com/wiki/Tsunomaki_Watame',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/watame-pop.mp3',
        audioInfo: 'https://youtu.be/x6hem8vmH4M'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'riksa',
    name: 'Riksa Dhirendra',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/aXx7qze.jpg',
        imgPopUrl: 'https://i.imgur.com/3djOLsw.jpg',
        imgIconUrl: 'https://i.imgur.com/aXx7qze.jpg',
        imgInfo: 'https://twitter.com/RiksaDhirendra/status/1265173609724567552',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/riksa-pop.mp3',
        audioInfo: 'https://youtu.be/L7rTTbibXB8'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'scaramouche',
    name: 'Scaramouche (genshinimpact)',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/UpIXqhv.jpeg',
        imgPopUrl: 'https://i.imgur.com/33JfTs9.jpeg',
        imgIconUrl: 'https://i.imgur.com/yAEl6Et.png',
        imgInfo: 'The cut scenes from Genshinimpact ',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/scaramouche-pop.mp3',
        audioInfo: 'Game Genshinimpact'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'toba-rana',
    name: '鳥羽樂奈',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/LYUWs56.jpeg',
        imgPopUrl: 'https://i.imgur.com/cTGhYB7.jpeg',
        imgIconUrl: 'https://i.imgur.com/nxLdZFe.png',
        imgInfo: 'https://www.facebook.com/RanaVtb/photos/?tab=album&album_id=111705640746455&ref=page_internal&mt_nav=1',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/toba-rana-pop.mp3',
        audioInfo: 'https://youtu.be/qgWxzQQT0ew'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'kiyoshi',
    name: '夏樹きよし',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/tE6VoVu.png',
        imgPopUrl: 'https://i.imgur.com/WMybtrq.png',
        imgIconUrl: 'https://i.imgur.com/qgbsAan.png',
        imgInfo: 'https://youtube.com/channel/UCApwCqmHCddqQkAObr-CqdQ',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/kiyoshi-pop.mp3',
        audioInfo: 'https://youtu.be/75V4i_IZBXE'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'chengmi',
    name: '橙米',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/DYlk6fR.png',
        imgPopUrl: 'https://i.imgur.com/8pFwzBL.png',
        imgIconUrl: 'https://i.imgur.com/lwx6QBf.png',
        imgInfo: 'from herself',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/chengmi-pop.mp3',
        audioInfo: 'from herself'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'toyakenmochi',
    name: '剣持刀也',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/dKETUP8.jpeg',
        imgPopUrl: 'https://i.imgur.com/lQcW1FH.jpeg',
        imgIconUrl: 'https://i.imgur.com/4o2DFgv.png',
        imgInfo: 'https://twitter.com/rei_toya_rei/status/1419696268561948678'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'kasasagi',
    name: '姬野鵲',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/tEL1MOi.jpg',
        imgPopUrl: 'https://i.imgur.com/DSFgVFz.jpg',
        imgIconUrl: 'https://i.imgur.com/hl2gxWK.png',
        imgInfo: 'https://youtu.be/_8E0N6SjZvo',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/kasasagi-pop.mp3',
        audioInfo: 'https://youtu.be/_8E0N6SjZvo'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'engineer-teamfortress',
    name: 'Engineer',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/MaXM6FG.jpg',
        imgPopUrl: 'https://i.imgur.com/d0ZTqst.jpg',
        imgIconUrl: 'https://i.imgur.com/muaku4V.png',
        imgInfo: 'https://youtu.be/gvdf5n-zI14',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/engineer-teamfortress-nope.mp3',
        audioInfo: 'https://wiki.teamfortress.com/w/images/b/bd/Engineer_no01.wav'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'tojiro-genzuki',
    name: '弦月藤士郎',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/GIKan10.png',
        imgPopUrl: 'https://i.imgur.com/Mn2FyCV.png',
        imgIconUrl: 'https://i.imgur.com/M9S3Ldo.png',
        imgInfo: 'https://twitter.com/1O46V/status/1246401408854720519',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/tojiro-genzuki-pop.mp3',
        audioInfo: 'https://youtu.be/tiMt4d6Xgyc'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'artemis',
    name: 'Artemis',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/OU9x7Iz.png',
        imgPopUrl: 'https://i.imgur.com/MGPG5DK.png',
        imgIconUrl: 'https://i.imgur.com/MGPG5DK.png',
        imgInfo: 'https://youtu.be/Ww8fbtFgxPY?t=384',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/artemis-pop.mp3',
        audioInfo: 'https://youtu.be/Ww8fbtFgxPY?t=422'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'fujinokuma',
    name: '藤乃熊',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/NQ0AaH5.png',
        imgPopUrl: 'https://i.imgur.com/tw6eef0.png',
        imgIconUrl: 'https://i.imgur.com/tw6eef0.png',
        imgInfo: '',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/fujinokuma-pop.mp3',
        audioInfo: ''
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'yoshizuki-meguru',
    name: 'ヨシヅキ参謀',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/nkWCEYV.png',
        imgPopUrl: 'https://i.imgur.com/SqYKRx0.png',
        imgIconUrl: 'https://i.imgur.com/3FWAZWU.png',
        imgInfo: 'https://youtu.be/8Fb5l02xPJc 08:30 & 14:33',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/yoshizuki-meguru-pop.mp3',
        audioInfo: 'https://youtu.be/elDHHMzFQmw'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'arashi',
    name: '神無月嵐',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/BpTq2oC.png',
        imgPopUrl: 'https://i.imgur.com/AgH4h6J.png',
        imgIconUrl: 'https://i.imgur.com/zv7ZroT.png',
        imgInfo: 'https://youtu.be/yBdQ5TEfi_Y',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/arashi-pop.mp3',
        audioInfo: 'from stream'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'mayuri-shiina',
    name: '椎名 まゆり',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/ObXK6DV.png',
        imgPopUrl: 'https://i.imgur.com/H69aiOS.png',
        imgIconUrl: 'https://i.imgur.com/HPa2YTk.png',
        imgInfo: 'Steins;Gate 01 9:54',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/mayuri-shiina-pop.mp3',
        audioInfo: 'Steins;Gate 01 9:54'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'shellin',
    name: 'シェリン',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/oo5UkYC.jpeg',
        imgPopUrl: 'https://i.imgur.com/2PDLiDf.jpeg',
        imgIconUrl: 'https://i.imgur.com/w9ixUHU.png',
        imgInfo: 'https://youtu.be/6Pd0xCRW7aU?t=2333',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/shellin-pop.mp3',
        audioInfo: 'https://youtu.be/mOaY7pqOpn4?t=8146'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'toko-inui',
    name: '戌亥とこ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/wZi6mM3.jpeg',
        imgPopUrl: 'https://i.imgur.com/wmpqhPm.jpeg',
        imgIconUrl: 'https://i.imgur.com/wmpqhPm.jpeg',
        imgInfo: 'https://youtu.be/_5kOWmcvfa0',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/toko-inui-pop.mp3',
        audioInfo: 'https://youtu.be/CMK7d-JV4fQ'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'misaka',
    name: '御坂美琴',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/WNDze6L.jpg',
        imgPopUrl: 'https://i.imgur.com/J0FT4y7.png',
        imgIconUrl: 'https://i.imgur.com/GjMoAzd.png',
        imgInfo: 'A Certain Scientific Railgun T 21 07:50',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/misaka-bilibili.mp3',
        audioInfo: 'A Certain Magical Index 01 19:05'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'proose',
    name: '布魯斯',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/Bsb3vXc.jpeg',
        imgPopUrl: 'https://i.imgur.com/AyQUUAn.jpg',
        imgIconUrl: 'https://i.imgur.com/Bsb3vXc.jpeg',
        imgInfo: 'https://twitter.com/purusu0325',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/proose-pop.mp3',
        audioInfo: 'https://youtu.be/6DhLk_3qypk?t=30'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'shiroisatou',
    name: '白色砂糖シロイサトウ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/yckAwkR.jpeg',
        imgPopUrl: 'https://i.imgur.com/fdwVTQz.jpeg',
        imgIconUrl: 'https://i.imgur.com/yckAwkR.jpeg',
        imgInfo: 'https://www.youtube.com/c/%E7%99%BD%E8%89%B2%E7%A0%82%E7%B3%96%E3%82%B7%E3%83%AD%E3%82%A4%E3%82%B5%E3%83%88%E3%82%A6/videos'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'fuwaminato',
    name: '不破湊',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/pdVzoCx.png',
        imgPopUrl: 'https://i.imgur.com/LF70VvG.png',
        imgIconUrl: 'https://i.imgur.com/R6JuFrp.jpg',
        imgInfo: 'https://youtu.be/qEnOCFh6v-E?t=1500',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/fuwaminato-pop.mp3',
        audioInfo: 'https://youtu.be/DMC2lq5PpRM'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'axia-krone',
    name: 'アクシア・クローネ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/Gmi0fNQ.jpeg',
        imgPopUrl: 'https://i.imgur.com/LKgXzQS.jpeg',
        imgIconUrl: 'https://i.imgur.com/mBj7ds0.jpg',
        imgInfo: 'https://youtu.be/0WdiSlrvmDk?t=116',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/axia-krone-pop.mp3',
        audioInfo: 'https://youtu.be/kkKdenmXcX4'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'healing',
    name: 'Healing Ch.希靈',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/Xzpf4Te.jpeg',
        imgPopUrl: 'https://i.imgur.com/hoq5A5j.jpeg',
        imgIconUrl: 'https://i.imgur.com/QBPV7DI.jpg',
        imgInfo: 'https://home.gamer.com.tw/artwork.php?sn=5097688',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/healing-pop.mp3',
        audioInfo: 'https://youtu.be/J0Opg0RaUFY'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'duca',
    name: 'Hibiki Du Ca',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/7iSHzw1.png',
        imgPopUrl: 'https://i.imgur.com/mPbbuH9.png',
        imgIconUrl: 'https://i.imgur.com/Gj5RlA5.jpg',
        imgInfo: 'https://youtu.be/p51k0fTQs6k',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/duca-pop.mp3',
        audioInfo: 'https://youtu.be/p51k0fTQs6k'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'catandcanned',
    name: '小羯貓貓',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/BvgFmyH.png',
        imgPopUrl: 'https://i.imgur.com/MCPymKB.png',
        imgIconUrl: 'https://i.imgur.com/Qmx8aoC.jpg',
        imgInfo: 'https://youtu.be/H1bcoSBHjEc?t=10698',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/catandcanned-pop-1.mp3',
        audioNormalUrl: 'https://softwaresing.github.io/popwaifu-file/audio/catandcanned-pop-2.mp3',
        audioInfo: 'https://youtu.be/H1bcoSBHjEc?t=10698'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'izuru',
    name: '奏手イヅル',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/HIXyWLY.jpg',
        imgPopUrl: 'https://i.imgur.com/3byTEyE.jpg',
        imgIconUrl: 'https://i.imgur.com/zOVrVEN.jpg',
        imgInfo: 'https://youtu.be/c9zeQriSTAU',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/izuru-pop.mp3',
        audioInfo: 'https://twitter.com/i/status/1390107245703307266'
      },
      {
        modeName: '2',
        imgNormalUrl: 'https://i.imgur.com/HI8SA2p.jpeg',
        imgPopUrl: 'https://i.imgur.com/KpBVQdD.jpeg',
        imgIconUrl: 'https://i.imgur.com/fbbfMIn.jpg',
        imgInfo: 'https://youtu.be/rnTQ47UOCrw?t=148 & https://youtu.be/NM6Qi1PM2Kw?t=1146',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/izuru-2-pop.mp3',
        audioInfo: 'https://youtu.be/NM6Qi1PM2Kw?t=1596'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'petra',
    name: 'Petra Gurin',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/wy5CByt.jpeg',
        imgPopUrl: 'https://i.imgur.com/tdvuFOK.png',
        imgIconUrl: 'https://i.imgur.com/hqdQaR4.jpg',
        imgInfo: 'https://www.youtube.com/channel/UCgA2jKRkqpY_8eysPUs8sjw (Profile pic) & https://twitter.com/petra_gurin/status/1418611909247471619',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/petra-pop.mp3',
        audioInfo: 'https://youtu.be/VOAOtZ5xPng'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'aonezutarou',
    name: '葵鼠たろう',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/o3366oI.png',
        imgPopUrl: 'https://i.imgur.com/4WUSGkG.png',
        imgIconUrl: 'https://i.imgur.com/AX09Zbd.jpg',
        imgInfo: 'from himself',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/aonezutarou-pop.mp3',
        audioInfo: 'https://youtu.be/muXxTI08hls?t=45'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'ollie',
    name: 'Kureiji Ollie',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/bUDLayJ.png',
        imgPopUrl: 'https://i.imgur.com/8hTYDnX.png',
        imgIconUrl: 'https://i.imgur.com/sQhawan.png',
        imgInfo: 'https://youtu.be/kzNzUK3xQto?t=1773',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/ollie-kukuku1.mp3',
        audioNormalUrl: 'https://softwaresing.github.io/popwaifu-file/audio/ollie-kukuku2.mp3',
        audioInfo: 'https://youtu.be/HT9UrfTYsB4?t=161'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'amaha-ari',
    name: '天葉亞里',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/rNMZ1dz.jpg',
        imgPopUrl: 'https://i.imgur.com/8WhVGqf.jpg',
        imgIconUrl: 'https://i.imgur.com/vW2TjJH.jpg',
        imgInfo: 'https://youtu.be/HVu67hLqJQo',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/amaha-ari-pop.mp3',
        audioInfo: 'https://youtu.be/HVu67hLqJQo'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'lutra',
    name: '露恰露恰',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/wZ4QiDW.png',
        imgPopUrl: 'https://i.imgur.com/oPObhTE.png',
        imgIconUrl: 'https://i.imgur.com/CotAGfV.png',
        imgInfo: 'https://youtu.be/y54UfL3OtfI?t=1556 & https://youtu.be/y54UfL3OtfI?t=1605',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/lutra-hota.mp3',
        audioInfo: 'https://youtu.be/y54UfL3OtfI?t=1604'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'obear',
    name: '歐貝爾',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/nfkWJzA.png',
        imgPopUrl: 'https://i.imgur.com/42qR9cM.png',
        imgIconUrl: 'https://i.imgur.com/SZ5bRdu.png',
        imgInfo: 'https://youtu.be/Fl8QAebF0B0',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/obear-yuema.mp3',
        audioInfo: 'https://youtu.be/Fl8QAebF0B0'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'chilla',
    name: '祈菈‧貝希毛絲',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/rvVzvSH.png',
        imgPopUrl: 'https://i.imgur.com/WSy4pYb.png',
        imgIconUrl: 'https://i.imgur.com/My2Cf0M.png',
        imgInfo: 'https://youtu.be/46bMAQHyui8?t=3037 & https://youtu.be/46bMAQHyui8?t=3041',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/chilla-bab.mp3',
        audioInfo: 'https://youtu.be/upGYnCMLIMw'
      },
      {
        modeName: 'bababa',
        imgNormalUrl: 'https://i.imgur.com/rvVzvSH.png',
        imgPopUrl: 'https://i.imgur.com/WSy4pYb.png',
        imgIconUrl: 'https://i.imgur.com/My2Cf0M.png',
        imgInfo: 'https://youtu.be/46bMAQHyui8?t=3037 & https://youtu.be/46bMAQHyui8?t=3041',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/chilla-bababa.mp3',
        audioInfo: 'https://youtu.be/upGYnCMLIMw'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'hati',
    name: '哈提Hati',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/exX5Xmi.jpeg',
        imgPopUrl: 'https://i.imgur.com/q4qEBAB.jpeg',
        imgIconUrl: 'https://i.imgur.com/exX5Xmi.jpeg',
        imgInfo: 'https://twitter.com/MoonHoundHati',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/hati-pop.mp3',
        audioInfo: 'https://discord.com/channels/785078538419699723/857133583651438623/857133759672614923'
      }
    ]
  })

  // await WaifuRepo.upsertWaifu({
  //   urlId: '',
  //   name: '',
  //   modeConfigList: [
  //     {
  //       modeName: 'default',
  //       imgNormalUrl: '',
  //       imgPopUrl: '',
  //       imgIconUrl: '',
  //       imgInfo: '',
  //       audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/.mp3',
  //       audioInfo: ''
  //     }
  //   ]
  // })
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
