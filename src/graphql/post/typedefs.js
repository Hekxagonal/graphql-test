import { gql } from 'apollo-server';

export const postTypeDefs = gql`
  extend type Query {
    post(id: String): Post
    posts: [Post]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    userId: String!
    # user: User!
    indexRef: Int!
    createdAt: String!
  }
`;
