const WaifuRepo = require('~entity/waifu/WaifuRepo')

exports.getPopCountList = async function () {
  const waifuList = await WaifuRepo.getList()
  return waifuList.map(({ waifuId, popCount }) => ({ waifuId, popCount }))
}
