import { gql } from 'apollo-server';

export const userTypeDefs = gql`
  extend type Query {
    user(id: ID!): User
    users: [User]!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    indexRef: Int!
    createdAt: String!
    # Posts: [Post]!
  }
`;
