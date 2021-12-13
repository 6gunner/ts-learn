const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");

const proxy = require('./proxy')


module.exports = {
  devServer: whenDev(() => ({
    proxy,
  })),
  eslint: {
    mode: ESLINT_MODES.file,
  },
  typescript: {
    enableTypeChecking: true /* (default value)  */,
  },
}
