module.exports = {
  "/api": {
    target: "http://localhost:3000/",
    pathRewrite: { "^/api": "" },
    changeOrigin: true,
    headers: {},
    cookieDomainRewrite: "localhost",
  },
};
