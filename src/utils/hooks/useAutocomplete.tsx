import { Location } from "../types";
type ReturnType = Record<number, { id: number; city: string; country: string }>;
const useAutocomplete = (inputState: string, options: []): ReturnType => {
  if (!options || !options.length) return {};
  const filtered: Location[] = options.filter((o) =>
    Object.values(o).includes(inputState)
  );
  return filtered.reduce((acc: ReturnType, item: Location) => {
    acc[item.id] = item;
    return acc;
  }, {});
};

export default useAutocomplete;
