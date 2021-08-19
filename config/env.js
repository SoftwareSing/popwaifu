const ENV = process.env.NODE_ENV

const development = 'development'
const production = 'production'

module.exports = {
  ENV,
  envKeyword: {
    development,
    production
  }
}
