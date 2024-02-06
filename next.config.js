/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivityPosition: "bottom-right",
  },
  experimental: {
    typedRoutes: true,
  },
  generateBuildId: process.env.GIT_HASH,
};

module.exports = nextConfig;
