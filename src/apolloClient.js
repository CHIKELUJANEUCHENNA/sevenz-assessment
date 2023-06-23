import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://testdrive.kompletecare.com/graphql', 
  cache: new InMemoryCache(),
});
export default client;