var getConfig = require('hjs-webpack');
var isDev = process.env.NODE_ENV !== 'production';

module.exports = getConfig({
  in   : 'app/app.js',
  out  : 'build',
  isDev: isDev,
  html: true,
  clearBeforeBuild: '!(images|favicon.ico)'
});
