/* global VENDOR_BUNDLE: true, CLIENT_BUNDLE: true */
import 'isomorphic-fetch';

import React from 'react';
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { StaticRouter } from 'react-router-dom';
import styleSheet from 'styled-components/lib/models/StyleSheet';

import App from '../../client/components/App';
import configureApolloClient from '../../client/utils/configureApolloClient';
import configureStore from '../../client/utils/configureStore';

export default function render(req, res) {
  const context = {};
  const client = configureApolloClient({ ssrMode: true });
  const store = configureStore(client);

  renderToStringWithData(
    <StaticRouter location={req.url} context={context}>
      <ApolloProvider client={client} store={store}>
        <App />
      </ApolloProvider>
    </StaticRouter>,
  ).then((html) => {
    if (context.url) {
      return res.redirect(302, context.url);
    }

    const css = styleSheet.getCSS();
    const preloadedState = JSON.stringify(client.store.getState());

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
  }).catch((error) => {
    console.log(error); // eslint-disable-line no-console
    res.sendStatus(500);
  });
}
