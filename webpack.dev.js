const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  devtool: "inline-source-map",

  plugins: [
    new HtmlWebpackPlugin({template: "./src/template/index.html"})
  ],

  module: {
    rules: [
      {test: /\.css$/i, use: ["style-loader", "css-loader"]},
      {test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource'},
    ],
  },

};