export type Location = {
  id: number;
  city: string;
  country: string;
  zip: string;
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
};
