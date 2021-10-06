// import { gql } from "@apollo/client";
// import { makeExecutableSchema } from "apollo-server-micro";
// import { createContext } from "./context";
// const prisma = createContext();
// export const typeDefs = gql`
//   type Property {
//     id: ID
//     title: String
//     city: String
//     country: String
//     baths: Int
//     beds: Int
//     size: Int
//     photo: String
//   }
//   type Query {
//     properties: [Property]
//   }
// `;

// export const resolvers = {
//   Query: {
//     properties: (_parent, args, context) => {
//       return prisma.property.findMany();
//     },
//   },
// };

// export const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });
