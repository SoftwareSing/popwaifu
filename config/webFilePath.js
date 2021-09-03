const path = require('path')

const webDirPath = path.resolve(__dirname, '..', 'popwaifu-web')
const webPublicDirPath = path.resolve(webDirPath, 'public')

module.exports = {
  webPublicDirPath,
  webIndexFilePath: path.resolve(webPublicDirPath, 'index.html'),
  webPageHeadFilePath: path.resolve(webDirPath, 'src', 'PageHead.svelte')
}
