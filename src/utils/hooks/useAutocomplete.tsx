import { useEffect, useState } from "react";
import { Location } from "../types";
const filter = (search: string, options: Location[]) => {
  const filtered: Location[] = options.filter((option) => {
    const keyIsPresent =
      Object.values(option).filter(
        (value, i) =>
          i !== 0 &&
          typeof value === "string" &&
          value.toLowerCase().includes(search)
      ).length > 0;
    return keyIsPresent;
  });
  return filtered;
};
const useAutocomplete = (
  inputState: string,
  options: Location[]
): Location[] => {
  const [filteredOptions, setFilteredOptions] = useState<Location[]>([]);

  useEffect(() => {
    if (!options || !options.length) return;
    if (!inputState) {
      setFilteredOptions([]);
    }
    // eslint-disable-next-line
  }, [inputState]);
  return filteredOptions;
};

export default useAutocomplete;
