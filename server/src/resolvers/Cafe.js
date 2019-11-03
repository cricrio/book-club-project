const { groupPastAndFutureMeetups } = require('../utils/meetup');

module.exports = {
  id: cafe => cafe._id,
  members: (cafe, __, { dataSources: { users } }) =>
    users.getUsersFromCafe(cafe._id),
  meetups: async (cafe, __, { dataSources }) => {
    const meetups = await dataSources.meetups.getMeetups(cafe._id);
    return meetups.length ? groupPastAndFutureMeetups(meetups) : {};
  }
};
