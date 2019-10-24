const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const server = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
server.use(webpackDevMiddleware(compiler, {
  open: config.devServer.host,
  publicPath: config.output.publicPath
}));

// // Serve the files on port 3000.
server.listen(3000, function () {
  console.log('Example server listening on port 3000!\n');
});
