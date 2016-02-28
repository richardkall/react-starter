import config from '../webpack.config.babel';
import express from 'express';
import path from 'path';
import reactMiddleware from './middleware/reactMiddleware';
import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackMiddleware from 'webpack-dev-middleware';

const DEBUG = process.env.NODE_ENV !== 'production';
const DEFAULT_PORT = 3000;
const server = express();

server.set('env', DEBUG ? 'development' : 'production');
server.set('port', process.env.PORT || DEFAULT_PORT);
server.set('views', path.resolve(__dirname, 'views'));
server.set('view engine', 'jade');

server.use(express.static(path.resolve(__dirname, '../build')));

if (DEBUG) {
  const compiler = webpack(config);
  server.use(webpackMiddleware(compiler, {
    historyApiFallback: true,
    hot: true
  }));
  server.use(webpackHotMiddleware(compiler));
}

server.use(reactMiddleware);

server.listen(server.get('port'), () => {
  console.info(`Server running in ${server.get('env')} on port ${server.get('port')}`); // eslint-disable-line no-console
});
