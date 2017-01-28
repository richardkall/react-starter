import AssetsPlugin from 'assets-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import webpack from 'webpack';

import common from './common';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  name: 'client',
  entry: {
    client: [
      ...!isProduction && ['webpack-hot-middleware/client'],
      './client',
    ],
  },
  output: {
    filename: `js/[name]${isProduction ? '.[chunkhash:8]' : ''}.js`,
    path: common.output.path,
    publicPath: common.output.publicPath,
  },
  module: {
    rules: [
      ...common.module.rules,
      {
        test: /\.(eot|gif|jpe?g|otf|png|svg|webp|woff|woff2?|ttf)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: `media/[name]${isProduction ? '.[hash:8]' : ''}.[ext]`,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    ...common.plugins,
    ...isProduction ? [
      new AssetsPlugin({
        filename: 'assets.json',
        path: common.output.path,
      }),
    ] : [
      new webpack.HotModuleReplacementPlugin(),
    ],
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource),
    }),
    new WebpackMd5Hash(),
  ],
  bail: isProduction,
};
