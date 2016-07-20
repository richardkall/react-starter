import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';

import config from '../../webpack.config.babel';

const compiler = webpack(config);

export const webpackMiddleware = devMiddleware(compiler, {
  historyApiFallback: true,
  hot: true,
  quiet: true
});

export const webpackHotMiddleware = hotMiddleware(compiler);
