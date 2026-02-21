/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.dummyjson.com', 'dummyjson.com'],
  },
  experimental: {
    typedRoutes: true,
  },
}

module.exports = nextConfig
