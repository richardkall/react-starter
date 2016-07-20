import {
  renderToStaticMarkup,
  renderToString
} from 'react-dom/server';

import React from 'react';
import {Provider} from 'react-redux';
import {RouterContext} from 'react-router';

import App from '../../views/App';
import configureStore from '../../../client/configureStore';

export default (renderProps) => {
  const assets = require('../../../build/assets.json');
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
