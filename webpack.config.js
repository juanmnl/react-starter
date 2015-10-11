var path = require("path");

module.exports = {
  context: path.resolve("src"),
  entry: "./app",
  output: {
    path : path.resolve("build/"), // Ghost folder for dev server
    publicPath: "/public/assets/js/",
    filename: "bundle.js"
  },

  devServer: {
    contentBase: "public"
  },

  module: {
    loaders: [
      {// Load JS, ES6
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {// Load CSS
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!autoprefixer-loader"
      },
      {// Load Sass
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        loader: "url-loader?limit=100000"
      }
    ]
  }
};
