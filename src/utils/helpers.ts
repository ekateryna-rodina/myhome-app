import {
  MAX_FILTER_PRICE,
  MAX_FILTER_SIZE,
  MIN_FILTER_PRICE,
  MIN_FILTER_SIZE,
} from "./constants";
import { PropertyFor } from "./enums";
import {
  AdditionalFilterKeys,
  AdditionalFiltersStringMap,
  Filter,
} from "./types";

const getRoomsNumber = (original: number[]) => {
  // update based on real data in future
  const max = 20;
  const mask = 10;
  const startNumber = 4;
  if (original.indexOf(mask) === -1) return original;
  const roomsNumberAfterMaskRemoved = [
    ...original.filter((i) => i !== mask),
  ].concat(Array.from(Array(max).keys()).map((n) => n + startNumber));
  return roomsNumberAfterMaskRemoved;
};

export const composeWhere = (locationId: number, filterQuery: string) => {
  const queryList = [];
  if (locationId) {
    queryList.push({ locationId: { equals: locationId } });
  }
  if (!filterQuery)
    return {
      AND: queryList,
    };
  const filter: Filter = JSON.parse(filterQuery);
  // PROPERTY TYPES
  const propertyTypeValues = Object.values(filter.propertyTypes);
  const selectAllTypes =
    propertyTypeValues.every((value) => !value) ||
    propertyTypeValues.every((value) => value);
  if (!selectAllTypes) {
    const showPropertTypes: string[] = Object.entries(
      filter.propertyTypes
    ).reduce((result: string[], entry: [string, boolean]) => {
      if (entry[1]) {
        result.push(entry[0]);
      }
      return result;
    }, []);

    queryList.push({ type: { in: showPropertTypes } });
  }
  // PRICE RANGE
  if (
    filter.priceRange[0] !== MIN_FILTER_PRICE ||
    filter.priceRange[1] !== MAX_FILTER_PRICE
  ) {
    queryList.push(
      ...[
        { price: { gte: filter.priceRange[0] } },
        { price: { lte: filter.priceRange[1] } },
      ]
    );
  }
  // SIZE RANGE
  if (
    filter.sizeRange[0] !== MIN_FILTER_SIZE ||
    filter.sizeRange[1] !== MAX_FILTER_SIZE
  ) {
    queryList.push(
      ...[
        { size: { gte: filter.sizeRange[0] } },
        { size: { lte: filter.sizeRange[1] } },
      ]
    );
  }

  // BEDROOMS
  queryList.push({ beds: { in: getRoomsNumber(filter.bedrooms) } });

  // BATHDROOMS
  queryList.push({ baths: { in: getRoomsNumber(filter.bathrooms) } });

  // ADDITIONAL
  const keys = Object.keys(AdditionalFiltersStringMap);
  keys.forEach((key) => {
    const isImportant = filter.additional[key as AdditionalFilterKeys];
    if (isImportant) {
      queryList.push({
        [key as AdditionalFilterKeys]: {
          equals: true,
        },
      });
    }
  });

  // FOR
  // fix case toUpper case
  queryList.push({
    for: {
      equals: filter.for.toUpperCase(),
    },
  });

  // MAP COORDINATES
  const { minLat, maxLat, minLng, maxLng } = filter.mapCoordinates;
  if (minLng || maxLng || minLat || maxLat) {
    queryList.push(
      ...[
        { lat: { gte: minLat } },
        { lat: { lte: maxLat } },
        { long: { gte: minLng } },
        { long: { lte: maxLng } },
      ]
    );
  }

  return { AND: queryList };
};

export function enumToStringArray<Type extends PropertyFor>(
  arg: Type
): string[] {
  let result: string[] = [];
  const isString = (val: number | string) => isNaN(+val);
  result = Object.keys(arg)
    .filter(isString)
    .map((k: string) => arg[k as any]);
  return result;
}
