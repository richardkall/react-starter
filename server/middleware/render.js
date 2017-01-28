/* global VENDOR_BUNDLE: true, CLIENT_BUNDLE: true */
import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import styleSheet from 'styled-components/lib/models/StyleSheet';

import App from '../../client/components/App';
import configureStore from '../../client/utils/configureStore';

export default function render(req, res) {
  const context = {};
  const store = configureStore();

  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
  );

  if (context.url) {
    return res.redirect(302, context.url);
  }

  const css = styleSheet.getCSS();
  const preloadedState = JSON.stringify(store.getState());

  return res
    .status(context.status || 200)
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
          <script>window.__PRELOADED_STATE__ = ${preloadedState}</script>
          <script src="${VENDOR_BUNDLE}"></script>
          <script src="${CLIENT_BUNDLE}"></script>
        </body>
      </html>
    `);
}
