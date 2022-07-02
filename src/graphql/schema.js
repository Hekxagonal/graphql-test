import { gql } from 'apollo-server';
import user from './user';
import post from './post';

const rootTypeDefs = gql`
  type Query {
    author: String
  }
`;

const rootResolvers = {
  Query: {
    author: () => 'Flavio Alexandre',
  },
};

export const typeDefs = [rootTypeDefs, user.typeDefs, post.typeDefs];
export const resolvers = [rootResolvers, user.resolvers, post.resolvers];
