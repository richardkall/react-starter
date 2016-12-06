import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';

import config from '../../webpack.config.babel';

const compiler = webpack(config);

export const webpackDevMiddleware = devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    children: false,
    chunkModules: false,
    chunks: false,
    colors: true,
    hash: false,
    timings: false,
    version: false,
  },
});

export const webpackHotMiddleware = hotMiddleware(compiler);
