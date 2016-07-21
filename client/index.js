import React from 'react';
import {AppContainer} from 'react-hot-loader';
import {render} from 'react-dom';

import Root from './components/Root';
import configureStore from './configureStore';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NextRoot = require('./components/Root').default;

    render(
      <AppContainer>
        <NextRoot store={store} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
