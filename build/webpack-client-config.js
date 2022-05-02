// webpack-client-config.js
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
	filename: 'index.html',
  template: path.join(__dirname,'../public/index.html'),
});

module.exports = {
  context: path.resolve(__dirname, '../client'),
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: './bundle-[hash:5].js'
  },
  mode: 'production',
  resolve:{
    extensions: ['.ts', '.tsx', '...']
	},
  plugins: [
    htmlPlugin,
    new MiniCssExtractPlugin({
      filename: "[name]-[hash:5].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
      }
    ]
  }
}