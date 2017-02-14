import React, { PropTypes } from 'react';
import { Route, Switch } from 'react-router-dom';
import { graphql } from 'react-apollo';

import Home from '../../pages/Home';
import About from '../../pages/About';
import NoMatch from '../../pages/NoMatch';
import Navigation from '../Navigation';

import USER_QUERY from './UserQuery.gql';
import './global-styles';

const App = ({ user }) => (
  <div>
    <Navigation user={user} />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

App.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default graphql(USER_QUERY, {
  options: { variables: { id: 1 } },
  props: ({ data: { user } }) => ({ user }),
})(App);
