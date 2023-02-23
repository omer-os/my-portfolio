/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["media.licdn.com"],
  },
};

module.exports = nextConfig;
