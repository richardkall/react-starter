import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';

import config from '../../webpack.config.babel';

const compiler = webpack(config);

export const webpackMiddleware = devMiddleware(compiler, {
  stats: {
    colors: true,
    children: false,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
  },
});
export const webpackHotMiddleware = hotMiddleware(compiler);
