import {
  renderToStaticMarkup,
  renderToString
} from 'react-dom/server';

import {
  RouterContext,
  match
} from 'react-router';

import React from 'react';
import {Provider} from 'react-redux';
import {createLocation} from 'history/lib/LocationUtils';

import App from '../views/App';
import NotFound from '../../client/components/NotFound';
import configureStore from '../../client/configureStore';
import routes from '../../client/routes';

const renderApp = (renderProps) => {
  const assets = require('../../build/assets.json');
  const store = configureStore();
  const initialState = store.getState();
  const content = renderToString(
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>
  );

  return renderToStaticMarkup(
    <App assets={assets} content={content} initialState={initialState} />
  );
};

export default ({url}, res) => {
  const location = createLocation(url);

  match({routes, location}, (error, redirectLocation, renderProps) => {
    if (error) {
      return res.status(500).send(error.message);
    } else if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (!renderProps) {
      return res.status(404).send('Not Found');
    }

    const isNotFound = renderProps.components.indexOf(NotFound) !== -1;

    return res
      .status(isNotFound ? 404 : 200)
      .send(`<!doctype html>${renderApp(renderProps)}`);
  });
};
