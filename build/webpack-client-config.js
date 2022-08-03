// webpack-client-config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  context: path.resolve(__dirname, '../client'),
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'main.js',
  },
  mode: isProduction ? 'production' : 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '...'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
      },
    ],
  },
};
