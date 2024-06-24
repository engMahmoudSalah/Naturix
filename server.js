const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 4000; // Choose any available port

app.use(
  '/recommend_recipes',
  createProxyMiddleware({
    target: 'https://recipe-recommender-w5nk.onrender.com/',
    changeOrigin: true,
  })
);

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
