import AssetsPlugin from 'assets-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import webpack from 'webpack';

import common, {
  babelLoaderOptions,
  cssLoaderOptions,
  urlLoaderOptions,
} from './common';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  name: 'client',
  entry: {
    client: [
      ...(!isProduction && ['webpack-hot-middleware/client']),
      './src/client',
    ],
  },
  output: {
    ...common.output,
    filename: `js/[name]${isProduction ? '.[chunkhash:8]' : ''}.js`,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: cssLoaderOptions,
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [
                    require('postcss-cssnext'), // eslint-disable-line global-require
                  ];
                },
              },
            },
          ],
        }),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              ...babelLoaderOptions,
              presets: [
                [
                  'env',
                  {
                    targets: {
                      browsers: '> 1%, Last 2 versions',
                    },
                    modules: false,
                  },
                ],
                'react',
              ],
            },
          },
        ],
      },
      {
        exclude: /\.(css|js|json)$/,
        use: [
          {
            loader: 'url-loader',
            options: urlLoaderOptions,
          },
        ],
      },
    ],
  },
  plugins: [
    ...common.plugins,
    ...(isProduction
      ? [
        new AssetsPlugin({
          filename: 'assets.json',
          path: common.output.path,
        }),
      ]
      : [new webpack.HotModuleReplacementPlugin()]
    ),
    new ExtractTextPlugin({
      allChunks: true,
      filename: `css/style${isProduction ? '.[contenthash:8]' : ''}.css`,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource),
    }),
    new WebpackMd5Hash(),
  ],
  bail: isProduction,
};
