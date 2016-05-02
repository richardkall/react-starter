import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import webpack from 'webpack';

import config from '../webpack.config.babel';
import reactMiddleware from './middleware/reactMiddleware';

const DEBUG = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;
const server = express();

server.set('view engine', 'pug');
server.set('views', path.resolve(__dirname, 'views'));

server.use(compression());
server.use(morgan(DEBUG ? 'dev' : 'combined'));

if (DEBUG) {
  const compiler = webpack(config);
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackMiddleware = require('webpack-dev-middleware');

  server.use(webpackMiddleware(compiler, {
    historyApiFallback: true,
    hot: true,
    quiet: true
  }));
  server.use(webpackHotMiddleware(compiler));
} else {
  server.use(express.static(path.resolve(__dirname, '../build')));
}

server.use(reactMiddleware);

server.listen(PORT, () =>
  console.info(`Server running in ${server.get('env')} on port ${PORT}`)
);
