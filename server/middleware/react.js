import React from 'react';
import styleSheet from 'styled-components/lib/models/StyleSheet';
import { ServerRouter, createServerRenderContext } from 'react-router';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';

import App from '../../client/components/App';
import Html from '../views/Html';

const renderApp = (location, context) => renderToString(
  <ServerRouter location={location} context={context}>
    <App />
  </ServerRouter>,
);

export default function reactMiddleware(req, res) {
  const assets = require('../../build/static/assets.json'); // eslint-disable-line global-require, import/no-unresolved
  const context = createServerRenderContext();
  let markup = renderApp(req.url, context);
  let status = 200;

  const { missed, redirect } = context.getResult();
  const styles = styleSheet.rules().map(rule => rule.cssText).join('\n');

  if (missed) {
    markup = renderApp(req.url, context);
    status = 404;
  } else if (redirect) {
    return res.redirect(301, redirect.pathname);
  }

  const html = renderToStaticMarkup(
    <Html assets={assets} markup={markup} styles={styles} />,
  );

  return res.status(status).send(`<!doctype html>${html}`);
}
