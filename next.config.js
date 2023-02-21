/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.vu.nl',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
