import {RouterContext, match} from 'react-router';
import configureStore, {sagaMiddleware} from '../../client/store/configureStore';
import {Provider} from 'react-redux';
import React from 'react';
import createLocation from 'history/lib/createLocation';
import {fetchTodos} from '../../client/sagas/watchFetchTodos';
import {renderToString} from 'react-dom/server';
import routes from '../../client/routes';

export default function reactMiddleware (req, res) {
  const location = createLocation(req.url);

  match({routes, location}, (error, redirectLocation, renderProps) => {
    if (error) return res.status(500).send(error.message);
    if (redirectLocation) return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    if (!renderProps) return res.status(404).send('Not Found');

    const assets = require('../../build/assets.json');
    const store = configureStore();

    return sagaMiddleware.run(fetchTodos).done.then(() => {
      const initialState = JSON.stringify(store.getState());
      const content = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      return res.render('index', {content, assets, initialState});
    });
  });
}
