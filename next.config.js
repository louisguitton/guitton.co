/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['guitton.co', 'cdn.devdojo.com', 'cdn-images-1.medium.com'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  publicRuntimeConfig: {
    appVersion: '2.0.0',
    googleAnalyticsId: 'G-SYZ6E13PWV',
    isProduction: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
  },
}
