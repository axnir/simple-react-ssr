// webpack-server-config.js
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  target: 'node',
  node: {
    // 使用__filename变量获取当前模块文件的带有完整绝对路径的文件名
    __filename: true,
    // 使用__dirname变量获得当前文件所在目录的完整目录名
    __dirname: true,
  },
  context: path.resolve(__dirname, '..'),
  entry: {
    app: path.resolve(__dirname, '../server/index.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/server'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '...'],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.less$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]-[hash::5]',
              },
            },
          },
          'less-loader',
        ],
      },
    ],
  },
};
