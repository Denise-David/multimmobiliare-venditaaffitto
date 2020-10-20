// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/adts', createProxyMiddleware({
      target: 'http://gecodev.eoc.ch',
    }),
  );
  app.use(
    '/autoanamnesi',
    createProxyMiddleware({
      target: 'http://gecodev.eoc.ch',
      changeOrigin: true,
    }),
  );
  app.use(
    '/eocmoss',
    createProxyMiddleware({
      target: 'http://gecodev.eoc.ch',
      changeOrigin: true,
    }),
  );
};
