module.exports = {
  // staticDirs: ["./public"],
  stories: ["../src/stories/**/*.stories.mdx", "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-designs",
    "@storybook/addon-storysource",
  ],
  framework: "@storybook/react",
  core: {
    builder: {
      name: "@storybook/builder-webpack5",
      options: {
        lazyCompilation: true,
        fsCache: true,
      },
    },
  },
};
