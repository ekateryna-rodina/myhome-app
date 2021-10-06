import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/schema";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createIsomorphicLink() {
  if (typeof window === "undefined") {
    const { SchemaLink } = require("@apollo/client/link/schema");

    return new SchemaLink({ typeDefs, resolvers });
  } else {
    const { HttpLink } = require("@apollo/client/link/http");
    return new HttpLink({ uri: "http://localhost:3000/api/graphql" });
  }
}
function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createIsomorphicLink(),
    cache: new InMemoryCache(),
  });
}
export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient();
  if (initialState) {
    _apolloClient.cache.restore(initialState);
    return _apolloClient;
  } else {
    if (typeof window === "undefined") return _apolloClient;
    apolloClient = apolloClient ?? _apolloClient;
    return apolloClient;
  }
}
export function useApollo(initialState: any) {
  // const store = useMemo(() => initializeApollo(initialState), [initialState]);
  const store = initializeApollo(initialState);
  return store;
}
