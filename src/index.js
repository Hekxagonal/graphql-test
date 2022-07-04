import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({}),
});

server.listen(4000).then(({ url }) => {
  console.log(`[SERVER] Server is running on ${url}`);
});
