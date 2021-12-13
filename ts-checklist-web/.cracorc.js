const {
  when,
  whenDev,
  whenProd,
  whenTest,
  ESLINT_MODES,
  POSTCSS_MODES,
} = require("@craco/craco");
const CracoAlias = require("craco-alias");

const proxy = require("./proxy");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
        tsConfigPath: "./tsconfig.edit.json",
      },
    },
  ],
  devServer: whenDev(() => ({
    proxy,
  })),
  eslint: {
    mode: ESLINT_MODES.file,
  },
  typescript: {},
};
