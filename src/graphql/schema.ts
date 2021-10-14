import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Property {
    id: ID
    title: String
    city: String
    country: String
    baths: Int
    beds: Int
    size: Int
    photo: String
  }
  type Location {
    id: ID
    city: String
    country: String
    zip: String
  }
  type RootQuery {
    properties: [Property]
    locations: [Location]
  }
  schema {
    query: RootQuery
  }
`;
