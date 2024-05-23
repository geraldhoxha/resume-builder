import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, Observable } from "@apollo/client";
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import axios from "axios";

const getAccessToken = () => localStorage.getItem("auth_token")
const getRefreshToken = () => localStorage.getItem("refresh_token")
export const setTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem("auth_token", accessToken)
  localStorage.setItem("refresh_token", refreshToken)
}
export const clearTokens = () => {
  localStorage.removeItem("auth_token")
  localStorage.removeItem("refresh_token")
}

const refreshTokens = async () => {
  const refreshToken = getRefreshToken()
  if (!refreshToken){
    throw new Error("No refresh token available")
  }

  const response = await axios.post('http://localhost:8080/refresh', {refreshToken: refreshToken})

  if (response.status !== 200) {
    throw new Error("Failed to refresh token")
  }

  const {accessToken, refreshToken: newRefreshToken} = response.data
  setTokens(accessToken, newRefreshToken)
  return accessToken
}

const authLink = setContext(async (_, {headers}) => {
  const token = getAccessToken()
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  }
})

const errorLink = onError(({graphQLErrors, networkError, operation, forward}) => {
  if (graphQLErrors?.length) {
    graphQLErrors.forEach(({message, locations, path}) => {
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    })
  }
  if (networkError && (networkError as any).statusCode == 401) {
    return new Observable(observer => {
      refreshTokens()
        .then(newAccessToken => {
          operation.setContext(({headers = {}}) => ({
            ...headers,
            authorization: `Bearer ${newAccessToken}`
          }))
          return forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
          })
        })
        .catch(error => {
          clearTokens()
          window.location.href = '/login'
          observer.error(error)
        })
    })
  } else {
    return forward(operation)
  }
})

const httpLink = new HttpLink({uri: 'http://localhost:8080/query'})

const link = ApolloLink.from([authLink, errorLink, httpLink])

export const Client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})
