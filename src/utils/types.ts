import { PropertyType } from "./enums";

export type Location = {
  id: number;
  city: string;
  country: string;
  zip?: string;
};
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
};

type AdditionalFilters =
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
  | "isWithWifi"
  | "isWithBreakfast"
  | "isWithFireplace";

export interface Filter {
  propertyTypes: Record<PropertyType, boolean>;
  additional?: { [key in AdditionalFilters]: boolean };
  priceRange?: number[];
  sizeRange?: number[];
  bathrooms?: number;
  bedrooms?: number;
}
