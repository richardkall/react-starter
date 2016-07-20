import {
  Route,
  Router,
  browserHistory
} from 'react-router';

import React from 'react';

import App from '../components/App';
import NotFound from '../components/NotFound';

export default (
  <Router history={browserHistory}>
    <Route component={App} path='/'>
      <Route component={NotFound} isNotFound path='*' />
    </Route>
  </Router>
);
