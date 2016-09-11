import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';
import configureStore from './configureStore';
import routes from './routes';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

ReactDOM.render(
  <Root store={store}>
    {routes}
  </Root>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
