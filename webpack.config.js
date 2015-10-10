var path = require("path");

module.exports = {
  context: path.resolve("src"),
  entry: "./app",
  output: {
    path : path.resolve("build/js/"), // Ghost folder for dev server
    publicPath: "/public/assets/js/",
    filename: "bundle.js"
  },

  devServer: {
    contentBase: "public"
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
};
