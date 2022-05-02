// webpack-client-config.js
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, '../client'),
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'main.js'
  },
  mode: 'production',
  resolve:{
    extensions: ['.ts', '.tsx', '...']
	},
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
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