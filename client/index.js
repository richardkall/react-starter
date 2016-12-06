import React from 'react';
import Router from 'react-router/BrowserRouter';
import { render } from 'react-dom';

import App from './components/App';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
