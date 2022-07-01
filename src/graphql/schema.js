import { gql } from 'apollo-server';
import { userResolvers } from './user/resolvers';
import { userTypeDefs } from './user/typedefs';

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

export const typeDefs = [rootTypeDefs, userTypeDefs];
export const resolvers = [rootResolvers, userResolvers];
