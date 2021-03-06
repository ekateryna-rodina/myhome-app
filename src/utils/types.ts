import { PropertyFor, PropertyType } from "./enums";

export type Location = {
  id: number;
  city: string;
  country: string;
  zip?: string;
};
export type AdditionalFilterKeys =
  | "isPetsFriendly"
  | "isFurnished"
  | "isParkingAccessible"
  | "isWithKitchen"
  | "isWithAirCondition"
  | "isWithLaundry"
  | "isWithBabyBed"
  | "isNearbyBeach"
  | "isWithOfficeZone"
  | "isWithSmokingZone"
  | "isWithWiFi"
  | "isWithBreakfast"
  | "isWithFireplace";
export const AdditionalFiltersStringMap = {
  isPetsFriendly: "Pets friendly",
  isFurnished: "Furnished",
  isParkingAccessible: "With parking",
  isWithKitchen: "With kithen",
  isWithAirCondition: "Air conditioning",
  isWithLaundry: "Laundry",
  isWithBabyBed: "Baby bed",
  isNearbyBeach: "Nearby a beach",
  isWithOfficeZone: "With office",
  isWithSmokingZone: "Smoking zone",
  isWithWiFi: "High speed wifi",
  isWithBreakfast: "Breakfast is included",
  isWithFireplace: "Fireplace",
};
export type AdditionalFilterMap = Record<AdditionalFilterKeys, boolean>;
export type Listing = {
  id: number;
  title: string;
  locationId: number;
  location: Location;
  baths: number;
  beds: number;
  size: number;
  photo: string;
  for: string;
  additional: AdditionalFilterMap;
  lat: number;
  long: number;
};

export interface Filter {
  propertyTypes: Record<PropertyType, boolean>;
  additional: AdditionalFilterMap;
  priceRange: number[];
  sizeRange: number[];
  bathrooms: number[];
  bedrooms: number[];
  for: PropertyFor;
  mapCoordinates: {
    minLat: number;
    maxLat: number;
    minLng: number;
    maxLng: number;
  };
}

export type Coordinates = {
  lat: number;
  lng: number;
};

export interface WhereFilter {
  locationId: number;
  type?: {};
  price?: {};
  size?: {};
  beds?: {};
  baths?: {};
  for: {};
  isPetsFriendly: {};
  isFurnished: {};
  isParkingAccessible: {};
  isWithKitchen: {};
  isWithAirCondition: {};
  isWithLaundry: {};
  isWithBabyBed: {};
  isNearbyBeach: {};
  isWithOfficeZone: {};
  isWithSmokingZone: {};
  isWithWiFi: {};
  isWithBreakfast: {};
  isWithFireplace: {};
  lat: {};
  long: {};
}
