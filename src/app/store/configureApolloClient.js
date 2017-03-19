import { ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: process.env.GRAPHQL_ENDPOINT || 'http://localhost:5000/graphql',
});

export default function configureApolloClient(options) {
  return new ApolloClient(Object.assign({}, {
    networkInterface,
    dataIdFromObject: ({ id }) => id || null,
  }, options));
}
