import WebpackStrip from 'strip-loader';
import devConfig    from './webpack.config.js';

const stripLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: WebpackStrip.loader('console.log') //Removes every console.log() statement
};

devConfig.module.loaders.push(stripLoader);

export default devConfig;
