const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar DateTime

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
    membersCount: Int
    meetupsCount: Int
    members: [User]
    meetups: MeetupQueryResponse
  }

  type Meetup {
    id: ID!
    name: String
    localisation: String
    date: DateTime
    participants: [User]
    participantsCount: Int
  }

  type MeetupQueryResponse {
    next: Meetup
    past: [Meetup]
    future: [Meetup]
  }

  type User {
    id: ID!
    email: String
    name: String
    pic: String
  }
`;

module.exports = typeDefs;
