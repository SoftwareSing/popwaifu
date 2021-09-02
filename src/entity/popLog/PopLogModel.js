const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  schemaVersion: {
    type: String,
    default: '001.000.000'
  },
  ip: {
    type: String,
    default: ''
  },
  popCount: {
    type: Number,
    default: 0
  },
  logTime: {
    type: Date,
    default: Date.now
  }
}, { collection: 'pop_log', timestamps: false, versionKey: false })

schema.index({ ip: 1, logTime: -1 }, { unique: true, background: false })
schema.index({ logTime: 1 })

const model = mongoose.model('PopLog', schema)
module.exports = model
