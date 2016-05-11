import {
  Route,
  Router,
  browserHistory
} from 'react-router';

import React from 'react';
import Root from '../views/Root';
import NotFound from '../views/NotFound';

export default (
  <Router history={browserHistory}>
    <Route component={Root} path='/'>
      <Route component={NotFound} isNotFound path='*' />
    </Route>
  </Router>
);
