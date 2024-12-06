/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      loader: 'imgix',
      path: 'public/assets/portfolio.gif',
      unoptimized: true, // This disables the image optimization API
    },
  },
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  // output: 'export' // Uncomment this only if you need static export
};

module.exports = withPWA(nextConfig);
