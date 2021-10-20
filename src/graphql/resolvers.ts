import { Filter, Listing } from "src/utils/types";

interface WhereFilter {
  locationId: number;
  type?: {};
}
const composeWhere = (locationId: number, filterQuery: string) => {
  const whereFilter: Partial<WhereFilter> = {};
  if (locationId) whereFilter["locationId"] = locationId;
  if (!filterQuery) return whereFilter;
  const filter: Filter = JSON.parse(filterQuery);
  if (Object.keys(filter)) {
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
  }

  return whereFilter;
};
export const resolvers = {
  RootQuery: {
    properties: async (_parent: any, { locationId, filter }: any, ctx: any) => {
      const where = composeWhere(locationId, filter);
      const data = await ctx.prisma.property.findMany({ where });

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
