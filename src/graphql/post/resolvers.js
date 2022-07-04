import axios from '../../../axios.config';

const post = async (_, { id }) => {
  const { data } = await axios.get('posts/' + id);
  return data;
};

const posts = async () => {
  const { data } = await axios.get('posts/');
  return data;
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
