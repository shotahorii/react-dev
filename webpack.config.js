const webpack = require('webpack');
const path    = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./App.js",
  module: {
    rules: [{
      test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }]
      }]
    },
    output: {
      path: __dirname + "/dist/",
      filename: "bundle.js"
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      host: "0.0.0.0"
    }
};