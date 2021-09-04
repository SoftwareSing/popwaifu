const Mongodb = require('~common/connection/Mongodb')
const WaifuModel = require('~entity/waifu/WaifuModel')

async function run () {
  await Mongodb.connect()
  await schema001()
  await Mongodb.disconnect()
}

async function schema001 () {
  await WaifuModel.updateMany(
    { schemaVersion: '001.000.000' },
    {
      $set: {
        'modeConfigList.$[].imgIconUrl': '',
        schemaVersion: '001.001.000'
      }
    }
  )
}

run()
