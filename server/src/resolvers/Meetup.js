module.exports = {
  participants: (meetup, _, { dataSources: { users } }) =>
    Promise.all(meetup.participantIds.map(id => users.getById(id)))
};
