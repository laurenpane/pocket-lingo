const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/rest/questions",
    createProxyMiddleware({
      target: "http://[::1]:5000",
      changeOrigin: true,
    })
  );
};
