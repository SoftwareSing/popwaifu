const PopLog = require('./PopLog')

exports.buildPopLog = function (obj) {
  obj.popLogId = String(obj._id)
  return new PopLog(obj)
}
