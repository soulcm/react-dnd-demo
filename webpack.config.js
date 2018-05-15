const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader:'babel-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    hot: true,
    compress: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3001,
    publicPath: '/',
    historyApiFallback: true,
    disableHostCheck: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ]
}
