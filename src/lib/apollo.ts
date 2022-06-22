import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4opufuh0y1r01w7hckvejiv/master',
  cache: new InMemoryCache(),
});
