/*** webpack.config.js ***/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'examples/src/index.html'),
  filename: './index.html',
});
module.exports = {
  entry: path.join(__dirname, 'examples/src/index.js'),
  mode: process.env.NODE_ENV || 'production',
  output: {
    path: path.join(__dirname, 'examples/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  devServer: {
    port: 3001,
  },
};
