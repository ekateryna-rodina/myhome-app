import {
  MAX_FILTER_PRICE,
  MAX_FILTER_SIZE,
  MIN_FILTER_PRICE,
  MIN_FILTER_SIZE,
} from "../../src/utils/constants";
import { Filter, Listing } from "../../src/utils/types";

interface WhereFilter {
  locationId: number;
  type?: {};
  price?: {};
  size?: {};
  beds?: {};
  baths?: {};
}

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
const composeWhere = (locationId: number, filterQuery: string) => {
  const whereFilter: Partial<WhereFilter> = {
    beds: { in: [2] },
    baths: { in: [1] },
  };
  if (locationId) whereFilter["locationId"] = locationId;
  if (!filterQuery) return whereFilter;
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

    whereFilter["type"] = {
      in: showPropertTypes,
    };
  }
  // PRICE RANGE
  if (
    filter.priceRange[0] !== MIN_FILTER_PRICE ||
    filter.priceRange[1] !== MAX_FILTER_PRICE
  ) {
    whereFilter["price"] = {
      gte: filter.priceRange[0],
      lte: filter.priceRange[1],
    };
  }
  // SIZE RANGE
  if (
    filter.sizeRange[0] !== MIN_FILTER_SIZE ||
    filter.sizeRange[1] !== MAX_FILTER_SIZE
  ) {
    whereFilter["size"] = {
      gte: filter.sizeRange[0],
      lte: filter.sizeRange[1],
    };
  }

  // BEDROOMS
  whereFilter["beds"] = {
    in: getRoomsNumber(filter.bedrooms),
  };

  // BATHDROOMS
  whereFilter["baths"] = {
    in: getRoomsNumber(filter.bathrooms),
  };

  return whereFilter;
};
export const resolvers = {
  RootQuery: {
    properties: async (_parent: any, { locationId, filter }: any, ctx: any) => {
      const where = composeWhere(locationId, filter);
      const data = await ctx.prisma.property.findMany({ where });
      console.log(data);

      return data.map(async (entry: Listing) => {
        const { city, country } = await ctx.prisma.location.findUnique({
          where: { id: entry.locationId },
        });
        return {
          ...entry,
          location: {
            city,
            country,
          },
        };
      });
    },
    property: async (_parent: any, { id }: any, ctx: any) => {
      const data = await ctx.prisma.property.findUnique({
        where: { id },
      });
      return data;
    },
    locations: async (_parent: any, _args: any, ctx: any) => {
      const data = await ctx.prisma.location.findMany({});
      return data;
    },
  },
};
