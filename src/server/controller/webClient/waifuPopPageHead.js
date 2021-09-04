const WaifuRepo = require('~entity/waifu/WaifuRepo')
const HttpError = require('~common/error/HttpError')
const { webPageHeadFilePath } = require('~config/webFilePath')

require('svelte/register')
const PageHead = require(webPageHeadFilePath).default

exports.waifuPopPageHead = async function ({ waifuUrlId, modeName = 'default' }) {
  if (typeof waifuUrlId !== 'string' || waifuUrlId.length < 1) throw new HttpError(301, '/')
  if (typeof modeName !== 'string') throw new HttpError(301, '/')

  const waifu = await WaifuRepo.getByUrlId(waifuUrlId)
  if (!waifu) throw new HttpError(301, '/')
  const mode = waifu.modeConfigList.find((mode) => mode.modeName === modeName)
  if (!mode) throw new HttpError(301, `/${waifuUrlId}`)

  const { head } = PageHead.render({
    title: waifu.name,
    description: `Click ${waifu.name}`,
    image: mode.imgIconUrl
  })

  return head
}
