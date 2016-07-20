import React from 'react';
import {render} from 'react-dom';

import Root from './components/Root';
import configureStore from './configureStore';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

render(
  <Root store={store} />,
  document.getElementById('root')
);
