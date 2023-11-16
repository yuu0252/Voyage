/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.microcms-assets.io',
          port: '',
          pathname: '/my-bucket/**',
        },}'images.microcms-assets.io'],
  },
};

module.exports = nextConfig;
