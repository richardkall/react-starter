/* global CSS_BUNDLE: true, VENDOR_BUNDLE: true, CLIENT_BUNDLE: true */
import 'isomorphic-fetch';

import React from 'react';
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { StaticRouter } from 'react-router-dom';

import App from '../../app/components/App';
import configureApolloClient from '../../app/store/configureApolloClient';
import configureStore from '../../app/store/configureStore';

export default function render(req, res) {
  const context = {};
  const client = configureApolloClient({ ssrMode: true });
  const store = configureStore(client);

  renderToStringWithData(
    <ApolloProvider client={client} store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>,
  ).then((html) => {
    if (context.url) {
      return res.redirect(302, context.url);
    }

    const preloadedState = JSON.stringify(client.store.getState());

    return res
      .status(context.status || 200)
      .send(`
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <title>React Starter</title>
            <link href="${CSS_BUNDLE}" rel="stylesheet">
          </head>
          <body>
            <div id="root">${html}</div>
            <script>window.__PRELOADED_STATE__ = ${preloadedState}</script>
            <script src="${VENDOR_BUNDLE}"></script>
            <script src="${CLIENT_BUNDLE}"></script>
          </body>
        </html>
      `);
  }).catch((error) => {
    console.log(error); // eslint-disable-line no-console
    res.sendStatus(500);
  });
}
