import {
  Route,
  Router,
  browserHistory
} from 'react-router';

import App from '../containers/App';
import React from 'react';

export default (
  <Router history={browserHistory}>
    <Route
      component={App}
      path='/'
    />
  </Router>
);
