import path from 'path';
import webpack from 'webpack';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  output: {
    path: path.resolve(__dirname, '../build'),
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
              plugins: isProduction && [
                'transform-react-remove-prop-types',
              ],
              presets: [
                ['es2015', { modules: false }],
                'react',
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    ...isProduction && [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false,
        },
        comments: false,
      }),
    ],
  ],
};
