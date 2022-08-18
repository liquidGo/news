const { createProxyMiddleware } = require("http-proxy-middleware");
// 代理   需要下载这个包，在官方配置文档中下载
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://i.maoyan.com",
      changeOrigin: true
    })
  );
};
