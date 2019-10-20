const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    cafes: [Cafe]
    cafe(cafeId: ID!): Cafe
  }

  enum CafeType {
    LOCAL
    ONLINE
  }

  type Cafe {
    id: ID!
    name: String
    type: CafeType
    pic: String
    description: String
    city: String
    members: [User]
    membersCount: Int
    meetupsCount: Int
  }

  type User {
    id: ID!
    email: String
    name: String
    pic: String
  }
`;

module.exports = typeDefs;
