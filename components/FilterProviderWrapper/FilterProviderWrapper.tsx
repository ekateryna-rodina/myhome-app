import React, { useState } from "react";
import { Listing, Location } from "../../src/utils/types";
type ContextPropsType = {
  locations: Location[];
  properties: Listing[];
  isFilterOpen: boolean;
  loading: boolean;
  handleLoading: (value: boolean) => void;
  handleLocations: (locations: Location[]) => void;
  handleIsFilterOpen: (value: boolean) => void;
  handleProperties: (properties: Listing[]) => void;
};
const initialState: ContextPropsType = {
  locations: [],
  properties: [],
  isFilterOpen: false,
  loading: false,
  handleLoading: (value: boolean) => {},
  handleIsFilterOpen: (value: boolean) => {},
  handleLocations: (locations: Location[]) => {},
  handleProperties: (properties: Listing[]) => {},
};
export const AppContext = React.createContext(initialState);
type AppContextProviderProps = { locations: Location[] };
const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
  locations: injectedLocations,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [locations, setLocations] = useState<Location[]>(
    injectedLocations || []
  );
  const [properties, setProperties] = useState<Listing[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
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
  const contextProps = {
    locations,
    handleLocations,
    isFilterOpen,
    handleIsFilterOpen,
    properties,
    handleProperties,
    loading,
    handleLoading,
  };
  return (
    <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
