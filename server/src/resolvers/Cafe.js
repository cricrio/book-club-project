module.exports = {
  id: cafe => cafe._id,
  members: (cafe, __, { dataSources: { users } }) =>
    users.getUsersFromCafe(cafe._id),
  meetups: (cafe, __, { dataSources: { meetups } }) =>
    meetups.getMeetups(cafe._id)
};
