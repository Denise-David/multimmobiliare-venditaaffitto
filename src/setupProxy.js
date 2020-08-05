// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/adts', createProxyMiddleware({
      target: 'http://gecodev.eoc.ch',
    }),
  );
  app.use(
    '/strutture_form_reparti',
    createProxyMiddleware({
      target: 'http://localhost:3030',
      changeOrigin: true,
    }),
  );
  app.use(
    '/risposte_form_pazienti',
    createProxyMiddleware({
      target: 'http://localhost:3030',
      changeOrigin: true,
    }),
  );
};
