import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri: process.env.GRAPHQL_ENDPOINT || 'http://localhost:5000/graphql',
});

export default options => new ApolloClient(Object.assign({}, {
  networkInterface,
}, options));
