import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Property {
    id: ID!
    title: String!
    baths: Int!
    beds: Int!
    size: Int!
    photo: String!
    for: String!
    location: Location!
    locationId: Int!
  }
  type Location {
    id: ID
    city: String!
    country: String!
    zip: String
  }
  type RootQuery {
    properties(locationId: Int): [Property]
    locations: [Location!]
    property(id: Int): Property!
  }
  schema {
    query: RootQuery
  }
`;
