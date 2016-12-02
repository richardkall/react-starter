import path from 'path';
import AssetsPlugin from 'assets-webpack-plugin';
import webpack from 'webpack';

import config from './config';

const isProduction = config.env === 'production';

export default {
  entry: isProduction ? [
    './index.js',
  ] : [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './index.js',
  ],
  context: path.resolve(__dirname, './client'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: `[name]${isProduction ? '.[chunkhash:8]' : ''}.js`,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: !isProduction,
            },
          },
        ],
      },
      {
        test: /\.(eot|gif|jpe?g|otf|png|svg|webp|woff|woff2?|ttf)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new AssetsPlugin({
      filename: 'assets.json',
      path: 'build',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: isProduction,
    }),
    ...isProduction ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
        output: {
          comments: false,
        },
      }),
    ] : [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
  ],
  resolve: {
    alias: {
      'styled-components$': 'styled-components/lib/index.js',
    },
  },
  bail: isProduction,
  cache: !isProduction,
  stats: {
    children: false,
  },
};
