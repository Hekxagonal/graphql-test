const user = () => ({ id: 1, name: 'John Doe' });

const users = () => [user(), user(), user()];

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
