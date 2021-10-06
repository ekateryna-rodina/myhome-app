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
  type Query {
    properties: [Property]
  }
`;
