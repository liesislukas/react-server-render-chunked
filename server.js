const express = require('express');
const rewrite = require('express-urlrewrite');
const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const WebpackConfig = require('./webpack.config');
const open = require('open');
const app = express();


app.use(webpackDevMiddleware(webpack(WebpackConfig), {
  publicPath: '/build/',
  stats: {
    colors: true
  }
}));


app.use(rewrite('/*', '/public/index.html'));

app.use(express.static(__dirname));

const port = process.env.PORT || 8080;
app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening at http://localhost:${port}`);
    open(`http://localhost:${port}`);
  }
});
