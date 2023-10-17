const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  entry: './src/index.js',

  optimization: {
    minimize: true
  },

  output: {
    filename: 'main-[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true,
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({filename: "[name]-[contenthash].css"}),
    new CssMinimizerPlugin()
    ],

  module: {
    rules: [
      {test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"]},
      {test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource'},
    ],
  },

};