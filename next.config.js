/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['via.placeholder.com']
  },
  reactStrictMode: true
}

module.exports = nextConfig
