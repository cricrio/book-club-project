import { request } from 'graphql-request';
import { prop } from 'rambda';

export const sendRequest = (url: string) => ({ query, parser = _ => _ }) => (
  variables: any
) => request(url, query, variables).then(parser);

export const createUserRequest = (sendFunction: Function) =>
  sendFunction({
    query: `mutation CreateUser($name: String){
  CreateUser(name: $name ){
    name
    id
  }
}`,
    parser: prop('CreateUser')
  });

export const createCafeRequest = (sendFunction: Function) =>
  sendFunction({
    query: `mutation CreateCafe($name: String, $description: String, $city: String, $pic:String, $type: CafeTypeEnum){
  CreateCafe(name: $name, description: $description, city: $city, pic: $pic, type: $type){
    name
    id
  }
}`,
    parser: prop('CreateCafe')
  });

export const createMeetupRequest = (sendFunction: Function) =>
  sendFunction({
    query: `mutation CreateMeetup($name: String, $date: _Neo4jDateTimeInput, $localisation: String){
      CreateMeetup(name: $name, date: $date, localisation: $localisation){
        name
        id
        date{
          day
          year
          month
        }
      }
    }
`,
    parser: prop('CreateMeetup')
  });

export const linkCafeToUserRequest = (sendFunction: Function) =>
  sendFunction({
    query: `mutation LinkCafeToUser($cafeId: ID!, $userId: ID!) {
      AddCafeMembers(from: { id: $cafeId }, to: { id: $userId }) {
        from {
          id
        }
      }
    }
    `
  });

export const linkCafeToMeetupRequest = (sendFunction: Function) =>
  sendFunction({
    query: `mutation LinkCafeToMeetup($cafeId: ID!, $meetupId: ID!) {
      AddCafeMeetups(from: { id: $cafeId }, to: { id: $meetupId }) {
        from {
          id
        }
      }
    }
    `
  });
