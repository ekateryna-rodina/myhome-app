import { gql } from "@apollo/client";

export const MAX_FILTER_PRICE = 5000;
export const MIN_FILTER_PRICE = 20;

export const MIN_FILTER_SIZE = 100;
export const MAX_FILTER_SIZE = 5000;

export const FILTER_BEDROOM = 2;
export const FILTER_BATHROOM = 1;

export const GET_PROPERTIES_QUERY = gql`
  query properties($locationId: Int, $filter: String) {
    properties(locationId: $locationId, filter: $filter) {
      id
      title
      beds
      baths
      size
      photo
      locationId
      location {
        city
        country
      }
    }
  }
`;
