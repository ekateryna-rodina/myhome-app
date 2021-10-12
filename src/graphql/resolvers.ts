export const resolvers = {
  Query: {
    properties: async (_parent: any, _args: any, ctx: any) => {
      return await ctx.prisma.property.findMany({});
    },
  },
};
