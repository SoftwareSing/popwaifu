const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  schemaVersion: {
    type: String,
    default: '001.000.000'
  },
  name: {
    type: String,
    default: ''
  },
  imgNormalUrl: {
    type: String,
    default: ''
  },
  imgPopUrl: {
    type: String,
    default: ''
  },
  imgNormalOriginInfo: {
    type: String,
    default: ''
  },
  imgPopOriginInfo: {
    type: String,
    default: ''
  },
  popCount: {
    type: Number,
    default: 0
  }
}, { collection: 'waifu', timestamps: true, versionKey: false })

const model = mongoose.model('Waifu', schema)
module.exports = model
