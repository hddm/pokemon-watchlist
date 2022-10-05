import { PropsWithChildren } from 'react';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'


export const client = new ApolloClient({
  link: createHttpLink({
    uri: "https://graphqlpokemon.favware.tech/",
  }),
  cache: new InMemoryCache({ addTypename: false }),
})

export function GraphQLProvider(props) {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}
