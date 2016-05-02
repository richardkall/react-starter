import {
  RouterContext,
  match
} from 'react-router';

import React from 'react';
import createLocation from 'history/lib/createLocation';
import {Provider} from 'react-redux';
import {renderToString} from 'react-dom/server';

import configureStore from '../../client/store/configureStore';
import routes from '../../client/routes';

export default function reactMiddleware ({url}, res) {
  const location = createLocation(url);

  match({routes, location}, (error, redirectLocation, renderProps) => {
    if (error) {
      return res.status(500).send(error.message);
    } else if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (!renderProps) {
      return res.status(404).send('Not Found');
    }

    const assets = require('../../build/assets.json');
    const store = configureStore();
    const initialState = JSON.stringify(store.getState());
    const content = renderToString(
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    );

    return res.render('index', {
      assets,
      content,
      initialState
    });
  });
}
