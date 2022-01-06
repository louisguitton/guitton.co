/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["guitton.co", "cdn.devdojo.com"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
