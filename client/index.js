import {Route, Router, browserHistory} from 'react-router';
import {SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED} from './constants/TodoFilters';
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
        filter={SHOW_ALL}
        path="/"
      />
      <Route
        component={App}
        filter={SHOW_ACTIVE}
        path="active"
      />
      <Route
        component={App}
        filter={SHOW_COMPLETED}
        path="completed"
      />
    </Router>
  </Provider>,
  document.getElementById('root')
);
