import path from 'path';
import webpack from 'webpack';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    ...isProduction && [
      new webpack.optimize.UglifyJsPlugin({ comments: false }),
    ],
  ],
};
