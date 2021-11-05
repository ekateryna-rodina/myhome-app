import React, { useCallback, useState } from "react";
import { initialFilter } from "../../src/utils/constants";
import { Filter, Listing, Location } from "../../src/utils/types";
type ContextPropsType = {
  locations: Location[];
  properties: Listing[] | null;
  isFilterOpen: boolean | null;
  loading: boolean;
  filter: Filter;
  selectedLocationId: number;
  focusItemListId: number | null;
  resultsChanged: boolean;
  handleFilter: (filter: Filter) => void;
  handleLoading: (value: boolean) => void;
  handleLocations: (locations: Location[]) => void;
  handleIsFilterOpen: (value: boolean) => void;
  handleProperties: (properties: Listing[]) => void;
  handleSelectedLocationId: (locationId: number) => void;
  handleFocusItemListId: (id: number) => void;
  handleResultsChanged: (isChanged: boolean) => void;
};

const initialState: ContextPropsType = {
  locations: [],
  properties: null,
  isFilterOpen: false,
  loading: false,
  filter: initialFilter,
  selectedLocationId: 0,
  focusItemListId: null,
  resultsChanged: false,
  handleFilter: (filter: Filter) => {},
  handleLoading: (value: boolean) => {},
  handleIsFilterOpen: (value: boolean) => {},
  handleLocations: (locations: Location[]) => {},
  handleProperties: (properties: Listing[]) => {},
  handleSelectedLocationId: (id: number) => {},
  handleFocusItemListId: (id: number) => {},
  handleResultsChanged: (isChanged: boolean) => {},
};
export const AppContext = React.createContext(initialState);
type AppContextProviderProps = { locations: Location[] };
const AppContextWrapper: React.FC<AppContextProviderProps> = ({
  children,
  locations: injectedLocations,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean | null>(null);
  const [locations, setLocations] = useState<Location[]>(
    injectedLocations || []
  );
  const [resultsChanged, setResultsChanged] = useState<boolean>(false);
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
  const handleFilter = useCallback(
    (filter: Filter) => {
      setFilter(filter);
    },
    [isFilterOpen]
  );
  const handleSelectedLocationId = (locationId: number) => {
    setSelectedLocationId(locationId);
  };
  const handleFocusItemListId = (id: number) => {
    setFocusItemListId(id);
  };
  const handleResultsChanged = (isChanged: boolean) => {
    setResultsChanged(isChanged);
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
    resultsChanged,
    handleResultsChanged,
  };
  return (
    <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
  );
};

export default AppContextWrapper;
