/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  buildExcludes: [/chunks\/.*$/],
  reloadOnOnline: true,
  sw: '/sw.js',
  fallbacks: {
    document: '/offline',
  },
  cacheOnFrontEndNav: true,
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'offline-cache',
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 24 * 60 * 60
        }
      }
    }
  ]
})

const nextConfig = withPWA({
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**'
      }
    ]
  }
})

export default nextConfig
