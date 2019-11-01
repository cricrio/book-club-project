module.exports = {
  createCafe: (_, { cafe }, { dataSources: { cafes } }) =>
    cafes.createCafe(cafe)
};
