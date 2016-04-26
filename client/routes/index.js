import {
  Route,
  Router,
  browserHistory
} from 'react-router';

import React from 'react';
import Root from '../containers/Root';

export default (
  <Router history={browserHistory}>
    <Route
      component={Root}
      path='/'
    />
  </Router>
);
