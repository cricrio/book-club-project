module.exports = {
  cafes: (_, __, { dataSources }) => dataSources.cafes.getAllCafes(),
  cafe: (_, { cafeId }, { dataSources }) => dataSources.cafes.getCafe(cafeId)
};
