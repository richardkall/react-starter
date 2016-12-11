import React from 'react';
import styleSheet from 'styled-components/lib/models/StyleSheet';
import { ServerRouter, createServerRenderContext } from 'react-router';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';

import App from '../../client/components/App';
import Html from '../views/Html';

export default function reactMiddleware(req, res) {
  const assets = require('../../build/static/assets.json'); // eslint-disable-line global-require, import/no-unresolved
  const context = createServerRenderContext();

  const markup = renderToString(
    <ServerRouter location={req.url} context={context}>
      <App />
    </ServerRouter>,
  );

  const { missed, redirect } = context.getResult();

  if (redirect) {
    return res.redirect(301, redirect.pathname);
  }

  const styles = styleSheet.rules().map(rule => rule.cssText).join('\n');

  const html = renderToStaticMarkup(
    <Html assets={assets} markup={markup} styles={styles} />,
  );

  return res
    .status(missed ? 404 : 200)
    .send(`<!doctype html>${html}`);
}
