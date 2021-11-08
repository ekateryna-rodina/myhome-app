import { composeWhere } from "../../src/utils/helpers";

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
      const data = await ctx.prisma.property.findMany({
        where,
        include: {
          location: true,
        },
      });

      return data;
    },
    property: async (_parent: any, { id }: any, ctx: any) => {
      const data = await ctx.prisma.property.findUnique({
        where: { id },
        include: {
          location: true,
        },
      });
      return data;
    },
    locations: async (_parent: any, _args: any, ctx: any) => {
      const data = await ctx.prisma.location.findMany({});
      return data;
    },
  },
};
