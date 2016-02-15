import {Router, Route, browserHistory} from 'react-router';
import App from './containers/App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route
      component={App}
      path="/"
    />
  </Router>,
  document.getElementById('root')
);
