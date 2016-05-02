import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';

import configureStore from './store/configureStore';
import routes from './routes';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
