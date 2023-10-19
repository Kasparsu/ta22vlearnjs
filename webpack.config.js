const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
        directory: path.resolve(__dirname, 'public')
    },
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './index.html'
    })
  ],
};