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
