const path = require('path')

const webPublicDirPath = path.resolve(__dirname, '..', 'popwaifu-web', 'public')

module.exports = {
  webPublicDirPath,
  webIndexFilePath: path.resolve(webPublicDirPath, 'index.html')
}
