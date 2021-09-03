const { webPageHeadFilePath } = require('~config/webFilePath')

require('svelte/register')
const PageHead = require(webPageHeadFilePath).default

exports.normalPageHead = function ({ title = '' } = {}) {
  const { head } = PageHead.render({ title })
  return head
}
