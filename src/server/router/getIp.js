const ipaddr = require('ipaddr.js')

/**
 * @typedef {import('@types/express').Request} Request
 */

/**
 * @param {Request} req
 */
exports.getIp = function (req) {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded !== 'string') return req.socket.remoteAddress

  const ips = forwarded.split(', ')
  for (let i = ips.length - 1; i >= 0; i -= 1) {
    const ip = ips[i]
    if (!isTrust(ip)) return ip
  }

  return req.socket.remoteAddress
}

function isTrust (ip) {
  return ipaddr.IPv4.isIPv4(ip) ? isV4Trust(ip) : isV6Trust(ip)
}

function isV4Trust (ip) {
  const addr = ipaddr.parse(ip)
  return ip === '34.95.86.237' ||
    addr.match(ipaddr.parseCIDR('10.0.0.0/8')) ||
    addr.match(ipaddr.parseCIDR('172.16.0.0/12')) ||
    addr.match(ipaddr.parseCIDR('192.168.0.0/16'))
}

function isV6Trust (ip) {
  const addr = ipaddr.parse(ip)
  return ip === '2600:1901:0:1468::' ||
    addr.match(ipaddr.parseCIDR('fc00::/7')) ||
    addr.match(ipaddr.parseCIDR('::1/128')) ||
    addr.match(ipaddr.parseCIDR('fe80::/10'))
}
