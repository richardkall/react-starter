/* eslint-disable import/no-unresolved, global-require */
import nodeExternals from 'webpack-node-externals';
import webpack from 'webpack';

import common from './common';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  name: 'server',
  entry: './server',
  target: 'node',
  node: {
    __dirname: false,
  },
  output: {
    filename: 'server.js',
    path: common.output.path,
    publicPath: common.output.publicPath,
    libraryTarget: 'commonjs2',
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
              emitFile: false,
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
    new webpack.DefinePlugin({
      CLIENT_BUNDLE: JSON.stringify(isProduction ? require('../build/assets.json').client.js : '/js/client.js'),
      VENDOR_BUNDLE: JSON.stringify(isProduction ? require('../build/assets.json').vendor.js : '/js/vendor.js'),
    }),
  ],
  externals: [nodeExternals()],
  bail: isProduction,
};
