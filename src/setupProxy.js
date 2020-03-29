const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/bankAccount',
    createProxyMiddleware({
      target: 'http://starlord.hackerearth.com',
      changeOrigin: true,
    })
  );
};