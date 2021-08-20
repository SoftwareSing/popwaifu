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
  popAudioUrl: {
    type: String,
    default: ''
  },
  popCount: {
    type: Number,
    default: 0
  }
}, { collection: 'waifu', timestamps: true, versionKey: false })

schema.index({ popCount: 1 })

const model = mongoose.model('Waifu', schema)
module.exports = model
