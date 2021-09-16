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
    name: '李李鈴蘭',
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
