import path from 'path';

import AssetsPlugin from 'assets-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import nested from 'postcss-nested';
import webpack from 'webpack';

import config from './config';

const DEBUG = config.env !== 'production';

export default {
  entry: DEBUG ? [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './index.js'
  ] : './index.js',
  context: path.resolve(__dirname, './client'),
  output: {
    filename: `[name]${DEBUG ? '' : '.[hash]'}.js`,
    hashDigestLength: 7,
    path: path.resolve(__dirname, './build'),
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:4]!postcss'),
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(eot|gif|jpe?g|png|svg|woff2?|ttf)$/,
        loader: `url?limit=10000&name=[name]${DEBUG ? '' : '.[hash:7]'}.[ext]`,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new AssetsPlugin({
      filename: 'assets.json',
      path: 'build'
    }),
    new ExtractTextPlugin(`[name]${DEBUG ? '' : '.[hash]'}.css`),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(DEBUG ? 'development' : 'production')
    }),
    ...DEBUG ? [
      new webpack.HotModuleReplacementPlugin()
    ] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  ],
  postcss: [
    nested(),
    autoprefixer({
      browsers: [
        '> 1%',
        'last 2 versions'
      ]
    })
  ]
};
