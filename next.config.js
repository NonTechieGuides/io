const path = require('path')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['timer.getmara.com', 'cdn.sanity.io'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}