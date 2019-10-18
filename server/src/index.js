const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const UserModel = require('./models/user');
const CafeModel = require('./models/cafe');

const Cafes = require('./datasources/Cafes');
const Users = require('./datasources/Users');

mongoose.connect('mongodb://localhost:27017/bookclub', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    cafes: new Cafes(CafeModel),
    users: new Users(UserModel)
  })
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
