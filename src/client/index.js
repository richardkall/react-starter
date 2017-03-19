import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';

import App from '../app/components/App';
import configureApolloClient from '../app/store/configureApolloClient';
import configureStore from '../app/store/configureStore';

const isProduction = process.env.NODE_ENV === 'production';

const client = configureApolloClient({
  connectToDevTools: typeof window !== 'undefined' && !isProduction,
});

const store = configureStore(client, window.__PRELOADED_STATE__);

render(
  <ApolloProvider client={client} store={store}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
