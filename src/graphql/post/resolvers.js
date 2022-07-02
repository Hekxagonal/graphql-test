const post = () => ({ id: 1, title: 'Post 1', content: 'Content 1' });

const posts = () => [post(), post(), post()];

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
