import path from 'path';

import compression from 'compression';
import express from 'express';
import morgan from 'morgan';

import config from '../config';
import reactMiddleware from './middleware/reactMiddleware';

import {
  webpackMiddleware,
  webpackHotMiddleware
} from './middleware/webpackMiddleware';

const isProduction = config.env === 'production';
const server = express();

if (!isProduction) {
  server.use(webpackMiddleware);
  server.use(webpackHotMiddleware);
}

server.use(compression());
server.use(express.static(path.resolve(__dirname, '../build')));
server.use(morgan(isProduction ? 'combined' : 'dev'));
server.use(reactMiddleware);

server.listen(config.server.port, () =>
  console.info(`Server running in ${server.get('env')} on port ${config.server.port}`) // eslint-disable-line no-console
);
