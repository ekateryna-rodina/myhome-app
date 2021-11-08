import { gql } from "@apollo/client";
import { PropertyFor, PropertyType } from "./enums";
import { Filter } from "./types";

export const MAX_FILTER_PRICE = 5000;
export const MIN_FILTER_PRICE = 20;

export const MIN_FILTER_SIZE = 100;
export const MAX_FILTER_SIZE = 5000;

export const FILTER_BEDROOM = [1, 2, 3, 10];
export const FILTER_BATHROOM = [1, 2, 3, 10];

// ten is replaced by another label in a view
export const DEFAULT_ROOMS_NUMBER_LIST = [1, 2, 3, 10];
export const FILTER_ADDITIONAL_DEFAULT = {
  isPetsFriendly: false,
  isFurnished: false,
  isParkingAccessible: false,
  isWithKitchen: false,
  isWithAirCondition: false,
  isWithLaundry: false,
  isWithBabyBed: false,
  isNearbyBeach: false,
  isWithOfficeZone: false,
  isWithSmokingZone: false,
  isWithWiFi: false,
  isWithBreakfast: false,
  isWithFireplace: false,
};
export const initialFilter: Filter = {
  propertyTypes: {
    [PropertyType.Apartment]: false,
    [PropertyType.House]: false,
    [PropertyType.Landplot]: false,
    [PropertyType.Office]: false,
  },
  priceRange: [MIN_FILTER_PRICE, MAX_FILTER_PRICE],
  sizeRange: [MIN_FILTER_PRICE, MAX_FILTER_PRICE],
  bedrooms: FILTER_BEDROOM,
  bathrooms: FILTER_BATHROOM,
  additional: FILTER_ADDITIONAL_DEFAULT,
  for: PropertyFor.RENT,
  mapCoordinates: { minLat: 0, maxLat: 0, minLng: 0, maxLng: 0 },
};
export const GET_PROPERTIES_QUERY = gql`
  query properties($locationId: ID, $filter: String) {
    properties(locationId: $locationId, filter: $filter) {
      id
      title
      beds
      baths
      size
      photo
      locationId
      lat
      long
      location {
        id
        city
        country
      }
    }
  }
`;

export const PROPERTIES_BY_IDS = gql`
  query propertiesByIds($ids: String) {
    propertiesByIds(ids: $ids) {
      id
      title
      beds
      baths
      size
      photo
      locationId
      lat
      long
      location {
        id
        city
        country
      }
    }
  }
`;
