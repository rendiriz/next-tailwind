module.exports = {
  webpack5: true,
  webpack: config => {
    config.resolve.fallback = { fs: false, module: false }
    return config
  },
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}
