/** @type {import('next').NextConfig} */
module.exports = {
    // Other Next.js configuration...
    async rewrites() {
      return [
        {
          source: '/fonts/:path*',
          destination: '/fonts/:path*',
        },
      ];
    },
    images: {
      domains: ['apod.nasa.gov'],
    },
  };