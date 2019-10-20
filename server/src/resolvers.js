const resolvers = {
  Query: {
    cafes: (_, __, { dataSources }) => dataSources.cafes.getAllCafes(),
    cafe: (_, { cafeId }, { dataSources }) => dataSources.cafes.getCafe(cafeId)
  },
  User: {
    id: user => user._id
  },
  Cafe: {
    id: cafe => cafe._id,
    members: (cafe, __, { dataSources }) =>
      dataSources.users.getUsersFromCafe(cafe._id)
  }
};

module.exports = resolvers;
