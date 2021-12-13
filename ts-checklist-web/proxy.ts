module.exports = {
  "/api": {
    target: "http://localhost:3000/",
    changeOrigin: true,
    headers: {
    },
    cookieDomainRewrite: "localhost",
  },
}