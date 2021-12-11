const ipaddr = require('ipaddr.js')
const { ipv4Trust, ipv6Trust } = require('~config/ipTrustConfig')

/**
 * @typedef {import('@types/express').Request} Request
 */

/**
 * @param {Request} req
 */
exports.getIp = function (req) {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded !== 'string') return req.socket.remoteAddress

  const ips = forwarded.split(/ *, */)
  for (let i = ips.length - 1; i >= 0; i -= 1) {
    const ip = ips[i]
    if (!isTrust(ip)) return ip
  }

  return req.socket.remoteAddress
}

const ipv4CidrTrustList = ipv4Trust.map((cidr) => ipaddr.parseCIDR(cidr))
const ipv6CidrTrustList = ipv6Trust.map((cidr) => ipaddr.parseCIDR(cidr))
function isTrust (ip) {
  return ipaddr.IPv4.isIPv4(ip)
    ? isMatchCidr(ip, ipv4CidrTrustList)
    : isMatchCidr(ip, ipv6CidrTrustList)
}

function isMatchCidr (ip, cidrList) {
  const addr = ipaddr.parse(ip)
  for (const cidr of cidrList) {
    if (addr.match(cidr)) return true
  }
  return false
}
