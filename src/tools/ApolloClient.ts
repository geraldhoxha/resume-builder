import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";


export const Client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8080/query'
  }),
  cache: new InMemoryCache(),
})
