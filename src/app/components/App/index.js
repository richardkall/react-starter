import { graphql } from 'react-apollo';

import App from './App';
import userQuery from './userQuery.gql';

export default graphql(userQuery, {
  options: {
    variables: {
      id: 1,
    },
  },
  props({ data: { user } }) {
    return { user };
  },
})(App);
