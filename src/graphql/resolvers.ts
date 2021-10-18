import { Listing } from "src/utils/types";

export const resolvers = {
  RootQuery: {
    properties: async (_parent: any, _args: any, ctx: any) => {
      const data = await ctx.prisma.property.findMany({});
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
    locations: async (_parent: any, _args: any, ctx: any) => {
      const data = await ctx.prisma.location.findMany({});
      return data;
    },
  },
};
