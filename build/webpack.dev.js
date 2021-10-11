const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const { merge } = require('webpack-merge')
const CommonConf = require('./webpack.common')

module.exports = merge(
  CommonConf,
  {
    mode: 'development',
    entry: ['./src/index.tsx', './index.html'],
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].[contenthash:10].js',
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.json', '.tsx'],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        })
      ],
    },
    devServer: {
      open: true,
      hot: true,
      port: 3033,
      magicHtml: true,
    },
    plugins: [
      new htmlWebpackPlugin({
        template: './index.html'
      })
    ],
    devtool: 'eval-cheap-module-source-map',
  }
)
