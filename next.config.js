/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    esmExternals: "loose",
  },
  images: {
    domains: ["media.licdn.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
