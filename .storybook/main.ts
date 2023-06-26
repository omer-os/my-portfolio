import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    // Initialize config.resolve if it is undefined
    if (!config.resolve) {
      config.resolve = {
        extensions: [],
        alias: {},
      };
    }

    // Add the TypeScript paths to Webpack's resolver
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../"),
      "@components": path.resolve(__dirname, "../components"),
      "@styles": path.resolve(__dirname, "../styles"),
      "@lib": path.resolve(__dirname, "../components/lib"),
    };

    return config;
  },
};

export default config;
