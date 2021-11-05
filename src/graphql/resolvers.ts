import { composeWhere } from "../../src/utils/helpers";
import { Listing } from "../../src/utils/types";

export const resolvers = {
  RootQuery: {
    properties: async (
      _parent: any,
      { locationId, filter }: { locationId: number; filter: string },
      ctx: any
    ) => {
      filter = filter.replace(/'/g, '"');
      locationId = Number(locationId);
      const where = composeWhere(locationId, filter);
      console.error(where);
      const data = await ctx.prisma.property.findMany({
        where,
      });

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
