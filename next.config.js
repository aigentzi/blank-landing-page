/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tixae.ai"],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://studio.xtrius.com/:path*',
        permanent: false,
      },
    ]
  },
};

module.exports = nextConfig;
