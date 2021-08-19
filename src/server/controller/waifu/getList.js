const WaifuRepo = require('~entity/waifu/WaifuRepo')

exports.getList = async function () {
  const waifuList = await WaifuRepo.getList()
  return waifuList
}
