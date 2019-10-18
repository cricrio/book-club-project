const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    cafes: [Cafe]
  }

  enum CafeType {
    LOCAL
    ONLINE
  }

  type Cafe {
    _id: String!
    name: String!
    type: CafeType!
    place: String
    members: [User]
  }

  type User {
    _id: String!
    email: String
    name: String!
  }
`;

module.exports = typeDefs;
