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
  // I drop serverRuntimeConfig and publicRuntimeConfig because of errors like:
  // "TypeError: Cannot destructure property 'publicRuntimeConfig' of 'next_config__WEBPACK_IMPORTED_MODULE_1___default(...)(...)' as it is undefined."
}
