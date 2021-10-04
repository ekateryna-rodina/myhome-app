// import { objectType, queryType } from "@nexus/schema";
// import { makeSchema } from "nexus";
// import { nexusPrisma } from "nexus-plugin-prisma";
// import path from "path";

// const Property = objectType({
//   name: "Property",
//   definition(t) {
//     t.model.id();
//     t.model.title();
//     t.model.city();
//     t.model.country();
//     t.model.baths();
//     t.model.beds();
//     t.model.size();
//     t.model.photo();
//   },
// });
// const Query = queryType({
//   definition(t) {
//     t.crud.property();
//     t.crud.properties();
//   },
// });
// export const schema = makeSchema({
//   types: { Query, Property },
//   plugins: [nexusPrisma({ experimentalCRUD: true })],
//   outputs: {
//     schema: path.join(process.cwd(), "schema.graphql"),
//     typegen: path.join(process.cwd(), "nexus.ts"),
//   },
//   typegenAutoConfig: {
//     contextType: "Context.Context",
//     sources: [
//       {
//         source: "@prisma/client",
//         alias: "prisma",
//       },
//       {
//         source: require.resolve("./context"),
//         alias: "Context",
//       },
//     ],
//   },
// });

import { makeSchema, queryType } from "@nexus/schema";
const Query = queryType({
  definition(t) {
    t.string("name", { resolve: () => "kate" });
  },
});
const types = { Query };
export const schema = makeSchema({
  types,
});
