/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['guitton.co'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    appVersion: '2.0.0',
    googleAnalyticsId: 'G-SYZ6E13PWV',
    isProduction: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
  },
}
