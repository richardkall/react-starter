import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import App from './components/App';
import configureApolloClient from './utils/configureApolloClient';
import configureStore from './utils/configureStore';

const isProduction = process.env.NODE_ENV === 'production';

const client = configureApolloClient({
  connectToDevTools: typeof window !== 'undefined' && !isProduction,
});

const store = configureStore(client, window.__PRELOADED_STATE__);

render(
  <Router>
    <ApolloProvider client={client} store={store}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
