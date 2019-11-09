import { ApolloServer } from 'apollo-server';
import { makeAugmentedSchema } from 'neo4j-graphql-js';
import { v1 as neo4j } from 'neo4j-driver';

const typeDefs = `
enum CafeTypeEnum {
  LOCAL
  ONLINE
}

type Cafe {
    id: ID!
    type: CafeTypeEnum
    name: String
    city: String
    description: String
    pic: String
    members: [User] @relation(name: "CAFE_MEMBER", direction: "OUT")
    meetups: [Meetup] @relation(name: "CAFE_MEETUP",direction: "OUT")
}

type User {
    id: ID!
    name: String
    pic: String
    cafes: [Cafe] @relation(name: "CAFE_MEMBER", direction: "IN")
}

type Meetup {
  id: ID!
  localisation: String
  name: String
  date: DateTime
  cafe: Cafe @relation(name: "CAFE_MEETUP",direction: "IN")
}
`;

const schema = makeAugmentedSchema({ typeDefs });

const driver = neo4j.driver(
  'bolt://localhost:7687',
  neo4j.auth.basic('neo4j', 'booki')
);

const server = new ApolloServer({ schema, context: { driver } });

server.listen(3003, '0.0.0.0').then(({ url }) => {
  console.log(`GraphQL API ready at ${url}`);
});
