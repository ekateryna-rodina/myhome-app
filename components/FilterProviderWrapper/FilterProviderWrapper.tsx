import React, { useState } from "react";
import { Location } from "../../src/utils/types";
type ContextPropsType = {
  locations: Location[];
  isFilterOpen: boolean;
  handleLocations: (locations: Location[]) => void;
  handleIsFilterOpen: (value: boolean) => void;
};
const initialState: ContextPropsType = {
  locations: [{ id: 0, country: "", city: "", zip: "" }],
  isFilterOpen: false,
  handleIsFilterOpen: (value: boolean) => {},
  handleLocations: (locations: Location[]) => {},
};
export const FilterContext = React.createContext(initialState);
type FilterProviderProps = { locations: Location[] };
const FilterProviderWrapper: React.FC<FilterProviderProps> = ({
  children,
  locations: injectedLocations,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [locations, setLocations] = useState<Location[]>(
    injectedLocations || []
  );
  const handleLocations = (locations: Location[]) => {
    setLocations(locations);
  };
  const handleIsFilterOpen = (open: boolean) => {
    setIsFilterOpen(open);
  };
  const contextProps = {
    locations,
    handleLocations,
    isFilterOpen,
    handleIsFilterOpen,
  };
  return (
    <FilterContext.Provider value={contextProps}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProviderWrapper;
