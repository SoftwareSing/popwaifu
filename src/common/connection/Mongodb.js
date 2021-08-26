const mongoose = require('mongoose')
const { mongoUrl } = require('~config/mongodbConfig')

exports.connect = async function () {
  try {
    const result = await mongoose.connect(mongoUrl, {
      autoIndex: false
    })
    console.log('MongoDB connect successful')
    return result
  } catch (err) {
    console.log('MongoDB connection failed')
    console.log(err)
    process.exit(1)
  }
}

exports.disconnect = async function () {
  await mongoose.connection.close(false)
  console.log('MongoDB connection closed')
}
