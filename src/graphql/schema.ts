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
    lat: Float!
    long: Float!
  }
  type Location {
    id: ID
    city: String!
    country: String!
    zip: String
  }
  type Additional {
    isPetsFriendly: Boolean
    isFurnished: Boolean
    isParkingAccessible: Boolean
    isWithKitchen: Boolean
    isWithAirCondition: Boolean
    isWithLaundry: Boolean
    isWithBabyBed: Boolean
    isNearbyBeach: Boolean
    isWithOfficeZone: Boolean
    isWithSmokingZone: Boolean
    isWithWifi: Boolean
    isWithBreakfast: Boolean
    isWithFireplace: Boolean
  }
  type Filter {
    propertyTypes: [String]
    bathrooms: Int!
    bedrooms: Int!
    priceRange: [Int!]
    sizeRange: [Int!]
    additional: Additional!
  }
  type RootQuery {
    properties(locationId: Int, filter: String): [Property]
    locations: [Location!]
    property(id: Int): Property!
  }
  schema {
    query: RootQuery
  }
`;
