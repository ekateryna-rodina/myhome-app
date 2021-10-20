import React, { useState } from "react";
import {
  FILTER_BATHROOM,
  FILTER_BEDROOM,
  MAX_FILTER_PRICE,
  MIN_FILTER_PRICE,
} from "src/utils/constants";
import { PropertyType } from "src/utils/enums";
import { Filter, Listing, Location } from "../../src/utils/types";
type ContextPropsType = {
  locations: Location[];
  properties: Listing[];
  isFilterOpen: boolean;
  loading: boolean;
  filter: Filter;
  selectedLocationId: number;
  handleFilter: (filter: Filter) => void;
  handleLoading: (value: boolean) => void;
  handleLocations: (locations: Location[]) => void;
  handleIsFilterOpen: (value: boolean) => void;
  handleProperties: (properties: Listing[]) => void;
  handleSelectedLocationId: (locationId: number) => void;
};

const initialFilter: Filter = {
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
  additional: {
    isPetsFriendly: false,
    isFurnished: true,
    isParkingAccessible: false,
    isWithKitchen: true,
    isWithAirCondition: true,
    isWithLaundry: true,
    isWithBabyBed: false,
    isNearbyBeach: false,
    isWithOfficeZone: false,
    isWithSmokingZone: false,
    isWithWifi: true,
    isWithBreakfast: false,
    isWithFireplace: false,
  },
};
const initialState: ContextPropsType = {
  locations: [],
  properties: [],
  isFilterOpen: false,
  loading: false,
  filter: initialFilter,
  selectedLocationId: 0,
  handleFilter: (filter: Filter) => {
    return initialFilter;
  },
  handleLoading: (value: boolean) => {},
  handleIsFilterOpen: (value: boolean) => {},
  handleLocations: (locations: Location[]) => {},
  handleProperties: (properties: Listing[]) => {},
  handleSelectedLocationId: (id: number) => {},
};
export const AppContext = React.createContext(initialState);
type AppContextProviderProps = { locations: Location[] };
const AppContextWrapper: React.FC<AppContextProviderProps> = ({
  children,
  locations: injectedLocations,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [locations, setLocations] = useState<Location[]>(
    injectedLocations || []
  );
  const [properties, setProperties] = useState<Listing[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<Filter>(initialFilter);
  const [selectedLocationId, setSelectedLocationId] = useState<number>(0);
  const handleLocations = (locations: Location[]) => {
    setLocations(locations);
  };
  const handleIsFilterOpen = (open: boolean) => {
    setIsFilterOpen(open);
  };
  const handleProperties = (listings: Listing[]) => {
    setProperties(listings);
  };
  const handleLoading = (show: boolean) => {
    setLoading(show);
  };
  const handleFilter = (filter: Filter) => {
    setFilter(filter);
  };
  const handleSelectedLocationId = (locationId: number) => {
    setSelectedLocationId(locationId);
  };
  const contextProps = {
    selectedLocationId,
    handleSelectedLocationId,
    locations,
    handleLocations,
    isFilterOpen,
    handleIsFilterOpen,
    properties,
    handleProperties,
    loading,
    handleLoading,
    filter,
    handleFilter,
  };
  return (
    <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
  );
};

export default AppContextWrapper;
