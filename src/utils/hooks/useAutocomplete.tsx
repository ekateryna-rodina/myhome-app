import { useEffect, useState } from "react";
import { Location } from "../types";
const filter = (search: string, options: Location[]) => {
  console.log(options);
  console.log(search);
  const filtered: Location[] = options.filter((option) => {
    const keyIsPresent =
      Object.values(option).filter(
        (value, i) =>
          typeof value === "string" && value.toLowerCase().includes(search)
      ).length > 0;
    console.log(keyIsPresent);
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
    console.log(inputState);
    if (!options || !options.length) return;
    if (!inputState) {
      setFilteredOptions([]);
    }
    const filtered = filter(inputState, options);
    setFilteredOptions(filtered);
    // eslint-disable-next-line
  }, [inputState]);
  return filteredOptions;
};

export default useAutocomplete;
