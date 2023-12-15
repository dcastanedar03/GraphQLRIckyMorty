import {ApolloServer} from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone";
//import { Episode } from "./resolvers/episode.ts";
//import { Character } from "./resolvers/character.ts";

import { typeDefs } from "./schema.ts";
import { Query } from "./resolvers/query.ts";

try{
  const app = new ApolloServer({
    typeDefs,
    resolvers: {
      Query, //Episode, Character
    }
  });
  const {url} = await startStandaloneServer(app);
  console.log(`🚀 Server ready at ${url}`)
}catch{
  console.log("Fallo el enlace")
}