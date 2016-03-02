import WebpackStrip from 'strip-loader';
import devConfig    from './webpack.config.js';

const stripLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  //Removes every console.log() statement
  loader: WebpackStrip.loader('console.log')
};

devConfig.module.loaders.push(stripLoader);

export default devConfig;
