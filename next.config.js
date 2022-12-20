const nextTranslate = require("next-translate");

const nextConfig = {
  productionBrowserSourceMaps: true,
  // redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/portfolio",
  //       permanent: true,
  //     },
  //   ];
  // },
  webpack(config, { dev }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  useTranslate: true,
  useTranslateConfig: {
    defaultLanguage: "en",
    supportedLanguages: ["en", "ar"],
    defaultLocale: "en",
    supportedLocales: ["en", "ar"],
  },
  images: {
    domains: ["images.unsplash.com", "media.graphassets.com"],
  },
};

module.exports = nextTranslate(nextConfig);
