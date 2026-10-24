/** @type {import('next').NextConfig} */
module.exports = {
  // Portuguese stays at the root (/ensaios), English lives under /en (/en/issues).
  // localeDetection is off so nobody gets redirected by their browser language.
  i18n: {
    locales: ['pt-BR', 'en'],
    defaultLocale: 'pt-BR',
    localeDetection: false,
  },
  // The essay pages live in pages/ensaios. English serves them as /en/issues, and the
  // Portuguese-style English URL (/en/ensaios) redirects there so each page has one address.
  async redirects() {
    return [
      { source: '/en/ensaios', destination: '/en/issues', permanent: true, locale: false },
      { source: '/en/ensaios/:slug', destination: '/en/issues/:slug', permanent: true, locale: false },
    ]
  },
  async rewrites() {
    return [
      { source: '/en/issues', destination: '/en/ensaios', locale: false },
      { source: '/en/issues/:slug', destination: '/en/ensaios/:slug', locale: false },
    ]
  },
}
