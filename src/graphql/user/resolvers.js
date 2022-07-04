import axios from '../../../axios.config';

const user = async (_, { id }) => {
  const { data } = await axios.get(`/users/${id}`);
  return data;
};

const users = async () => {
  const { data } = await axios.get('/users/');
  return data;
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
