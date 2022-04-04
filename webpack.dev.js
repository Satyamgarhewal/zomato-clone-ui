const common = require('./webpack.config');
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  entry: './src/index.jsx',
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
});
