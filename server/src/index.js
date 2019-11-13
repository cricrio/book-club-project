const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const UserModel = require('./models/user');
const CafeModel = require('./models/cafe');
const MeetupModel = require('./models/meetup');

const Cafes = require('./datasources/Cafes');
const Users = require('./datasources/Users');
const Meetups = require('./datasources/Meetups');

mongoose.connect('mongodb://mongo/bookclub', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    cafes: new Cafes(CafeModel),
    users: new Users(UserModel),
    meetups: new Meetups(MeetupModel)
  })
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
