// import { ApolloClient, InMemoryCache } from "@apollo/client";

// export const client = new ApolloClient({
//   ssrMode: typeof window === "undefined",
//   uri: "http://localhost:3000/api/graphql",
//   cache: new InMemoryCache(),
// });

// import { prisma } from ".prisma/client";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { useMemo } from "react";
import { resolvers } from "src/graphql/resolvers";
import { typeDefs } from "../graphql/schema";
import prisma from "./prisma";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createIsomorphicLink() {
  if (typeof window === "undefined") {
    const { SchemaLink } = require("@apollo/client/link/schema");
    const schema = makeExecutableSchema({ typeDefs, resolvers });
    return new SchemaLink({
      schema,
      context: {
        prisma,
      },
    });
  } else {
    const { HttpLink } = require("@apollo/client/link/http");
    return new HttpLink({ uri: "/api/graphql" });
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
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
