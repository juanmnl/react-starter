const WebpackStrip = require('strip-loader');
const devConfig = require('./webpack.config.js');

const stripLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  //Removes every console.log() statement
  loader: WebpackStrip.loader('console.log')
};

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;
