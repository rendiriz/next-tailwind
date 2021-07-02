module.exports = {
  webpack5: true,
  webpack: config => {
    config.resolve.fallback = { fs: false, module: false }

    return config
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}
