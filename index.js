import { ApolloServer } from "apollo-server";
import models from "./models";
import resolvers from "./resolvers";
import schema from "./schema";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async ({ req, connection }) => {
    if (connection) {
      return {
        models,
      };
    }

    if (req) {
      return {
        models,
      };
    }
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
