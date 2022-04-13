const path = require('path')

const apiSpecDirPath = path.resolve(__dirname, '..', 'api-spec')

const serverApiSpecDirPath = path.resolve(apiSpecDirPath, 'server')
const serverApiSpecMainPath = path.resolve(serverApiSpecDirPath, 'openapi.yaml')

module.exports = {
  apiSpecDirPath,
  serverApiSpecDirPath,
  serverApiSpecMainPath
}
