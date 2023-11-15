
/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  swcMinify: true,
  reactStrictMode: true,
  i18n
}

module.exports = nextConfig