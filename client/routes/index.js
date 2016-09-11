import {
  IndexRoute,
  Route,
  Router,
  browserHistory
} from 'react-router';

import React from 'react';

import App from './App';
import Home from './Home';
import NotFound from './NotFound';

export default (
  <Router history={browserHistory}>
    <Route component={App} path='/'>
      <IndexRoute component={Home} />
      <Route component={NotFound} path='*' />
    </Route>
  </Router>
);
