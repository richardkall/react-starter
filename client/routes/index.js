import {
  Route,
  Router,
  browserHistory
} from 'react-router';

import React from 'react';
import App from '../views/App';
import NotFound from '../views/NotFound';

export default (
  <Router history={browserHistory}>
    <Route component={App} path='/'>
      <Route component={NotFound} isNotFound path='*' />
    </Route>
  </Router>
);
