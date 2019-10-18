const resolvers = {
  Query: {
    cafes: (_, __, { dataSources }) => dataSources.cafes.getAllCafes()
  },
  Cafe: {
    members: (cafe, __, { dataSources }) =>
      dataSources.users.getUsersFromCafe(cafe._id)
  }
};

module.exports = resolvers;
