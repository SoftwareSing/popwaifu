const { ENV, envKeyword } = require('./env')

module.exports = mongodbConfig(ENV)

function mongodbConfig (env) {
  switch (env) {
    case envKeyword.production: {
      return {
        mongoUrl: 'mongodb://127.0.0.1:27017/popwaifu'
      }
    }
    default: {
      return {
        mongoUrl: 'mongodb://127.0.0.1:27017/popwaifu'
      }
    }
  }
}
