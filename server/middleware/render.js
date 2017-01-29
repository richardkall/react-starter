/* global VENDOR_BUNDLE: true, CLIENT_BUNDLE: true */
import React from 'react';
import { ServerRouter, createServerRenderContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import styleSheet from 'styled-components/lib/models/StyleSheet';

import App from '../../client/components/App';

export default function render(req, res) {
  const context = createServerRenderContext();
  const html = renderToString(
    <ServerRouter location={req.url} context={context}>
      <App />
    </ServerRouter>,
  );

  const { missed, redirect } = context.getResult();

  if (redirect) {
    return res.redirect(301, redirect.pathname);
  }

  const css = styleSheet.getCSS();

  return res
    .status(missed ? 404 : 200)
    .send(`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <title>React Starter</title>
          <style>${css}</style>
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="${VENDOR_BUNDLE}"></script>
          <script src="${CLIENT_BUNDLE}"></script>
        </body>
      </html>
    `);
}
