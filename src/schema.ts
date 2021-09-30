import { makeSchema, objectType, queryType } from "@nexus/schema";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";
import path from "path";

const Property = objectType({
  name: "Property",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.city();
    t.model.country();
    t.model.baths();
    t.model.beds();
    t.model.size();
    t.model.photo();
  },
});
const Query = queryType({
  definition(t) {
    t.crud.property();
    t.crud.properties({
      filtering: true,
    });
  },
});
export const schema = makeSchema({
  types: { Query, Property },
  plugins: [nexusSchemaPrisma({ experimentalCRUD: true })],
  outputs: {
    schema: path.join(process.cwd(), "schema.graphql"),
    typegen: path.join(process.cwd(), "nexus.ts"),
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma",
      },
      {
        source: require.resolve("./context"),
        alias: "Context",
      },
    ],
  },
});
