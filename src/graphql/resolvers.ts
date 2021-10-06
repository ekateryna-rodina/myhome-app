export const resolvers = {
  Query: {
    properties: async (_parent: any, _args: any, ctx: any) => {
      console.log("ctx");
      console.log(ctx);
      return await ctx.prisma.property.findMany({});
    },
  },
};
