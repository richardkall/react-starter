import path from 'path';

import compression from 'compression';
import express from 'express';
import morgan from 'morgan';

import reactMiddleware from './middleware/react';
import { webpackDevMiddleware, webpackHotMiddleware } from './middleware/webpack';

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;
const app = express();

if (isProduction) {
  app.use(compression());
} else {
  app.use(webpackDevMiddleware);
  app.use(webpackHotMiddleware);
}

app.use(morgan(isProduction ? 'combined' : 'dev'));
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(reactMiddleware);

app.listen(port, () => {
  console.log(`Server running on port ${port}`); // eslint-disable-line no-console
});
