import React, { useCallback, useState } from "react";
import {
  FILTER_ADDITIONAL_DEFAULT,
  FILTER_BATHROOM,
  FILTER_BEDROOM,
  MAX_FILTER_PRICE,
  MIN_FILTER_PRICE,
} from "../../src/utils/constants";
import { PropertyFor, PropertyType } from "../../src/utils/enums";
import { Filter, Listing, Location } from "../../src/utils/types";
type ContextPropsType = {
  locations: Location[];
  properties: Listing[] | null;
  isFilterOpen: boolean;
  loading: boolean;
  filter: Filter;
  selectedLocationId: number;
  focusItemListId: number | null;
  handleFilter: (filter: Filter) => void;
  handleLoading: (value: boolean) => void;
  handleLocations: (locations: Location[]) => void;
  handleIsFilterOpen: (value: boolean) => void;
  handleProperties: (properties: Listing[]) => void;
  handleSelectedLocationId: (locationId: number) => void;
  handleFocusItemListId: (id: number) => void;
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
  bedrooms: [FILTER_BEDROOM],
  bathrooms: [FILTER_BATHROOM],
  additional: FILTER_ADDITIONAL_DEFAULT,
  for: PropertyFor.RENT,
  mapCoordinates: { minLat: 0, maxLat: 0, minLng: 0, maxLng: 0 },
};
const initialState: ContextPropsType = {
  locations: [],
  properties: null,
  isFilterOpen: false,
  loading: false,
  filter: initialFilter,
  selectedLocationId: 0,
  focusItemListId: null,
  handleFilter: (filter: Filter) => {
    return initialFilter;
  },
  handleLoading: (value: boolean) => {},
  handleIsFilterOpen: (value: boolean) => {},
  handleLocations: (locations: Location[]) => {},
  handleProperties: (properties: Listing[]) => {},
  handleSelectedLocationId: (id: number) => {},
  handleFocusItemListId: (id: number) => {},
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
  const [properties, setProperties] = useState<Listing[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<Filter>(initialFilter);
  const [focusItemListId, setFocusItemListId] = useState<number | null>(null);
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
  const handleFilter = useCallback((filter: Filter) => {
    setFilter(filter);
  }, []);
  const handleSelectedLocationId = (locationId: number) => {
    setSelectedLocationId(locationId);
  };
  const handleFocusItemListId = (id: number) => {
    setFocusItemListId(id);
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
    focusItemListId,
    handleFocusItemListId,
  };
  return (
    <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
  );
};

export default AppContextWrapper;
