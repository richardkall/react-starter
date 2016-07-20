import {
  IndexRoute,
  Route,
  Router,
  browserHistory
} from 'react-router';

import React from 'react';

import App from './components/App';
import Home from './components/Home';
import NotFound from './components/NotFound';

export default (
  <Router history={browserHistory}>
    <Route component={App} path='/'>
      <IndexRoute component={Home} />
      <Route component={NotFound} isNotFound path='*' />
    </Route>
  </Router>
);
