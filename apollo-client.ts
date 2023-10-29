import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cloajnni2g3ho01ukd13k315d/master',
  cache: new InMemoryCache(),
})
