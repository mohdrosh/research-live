/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/research',
  skipMiddlewareUrlNormalize: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/research/api/:path*',
          destination: 'http://localhost:8000/api/:path*',
        },
        {
          source: '/api/:path*',
          destination: 'http://localhost:8000/api/:path*',
        },
      ],
    };
  },
}
module.exports = nextConfig