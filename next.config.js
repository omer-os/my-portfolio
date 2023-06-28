/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["media.licdn.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
