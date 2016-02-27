import {Route, Router, browserHistory} from 'react-router';
import App from './containers/App';
import {Provider} from 'react-redux';
import React from 'react';
import configureStore from './store/configureStore';
import {render} from 'react-dom';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route
        component={App}
        path="/"
      />
    </Router>
  </Provider>,
  document.getElementById('root')
);
