/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: true
  },
  // Enable build caching
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename]
        }
      }
    }
    return config
  }
}

module.exports = nextConfig 