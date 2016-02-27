import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import path from 'path';
import webpack from 'webpack';

const DEFAULT_PORT = 3000;
const DEBUG = process.env.NODE_ENV !== 'production';
const CSS_PARAMS = 'modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:4]';

export default {
  context: path.resolve(__dirname, './client'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: `[name]${DEBUG ? '' : '.[hash]'}.js`,
    hashDigestLength: 7
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: DEBUG ? `style!css?${CSS_PARAMS}!postcss` : ExtractTextPlugin.extract('style', `css?${CSS_PARAMS}!postcss`)
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  postcss: [
    autoprefixer()
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      ...DEBUG ? {} : {
        minify: {
          collapseWhitespace: true,
          minifyURLs: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeOptionalTags: true,
          removeRedundantAttributes: true,
          removeTagWhitespace: true,
          useShortDoctype: true
        }
      }
    }),
    ...DEBUG ? [] : [
      new ExtractTextPlugin('[name].[hash].css'),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  ],
  devServer: {
    historyApiFallback: true,
    port: process.env.PORT || DEFAULT_PORT
  }
};
