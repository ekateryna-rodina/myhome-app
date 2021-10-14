import { Listing } from "src/utils/types";

export const resolvers = {
  RootQuery: {
    properties: async (_parent: any, _args: any, ctx: any) => {
      const data = await ctx.prisma.property.findMany({});
      return data.map((entry: Listing) => entry);
    },
    locations: async (_parent: any, _args: any, ctx: any) => {
      const data = await ctx.prisma.location.findMany({});
      return data;
    },
  },
};
