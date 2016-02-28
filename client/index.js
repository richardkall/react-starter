import {Provider} from 'react-redux';
import React from 'react';
import configureStore from './store/configureStore';
import {render} from 'react-dom';
import routes from './routes';

const store = configureStore();

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
