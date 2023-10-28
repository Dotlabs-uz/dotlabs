/** @type {import('next').NextConfig} */

const path = require('path')


const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: ["uz", "ru", "en"],
    defaultLocale: "ru",
 },
}

module.exports = nextConfig
