import { request } from 'graphql-request';
import { prop } from 'rambda';
import { v1 as neo4j } from 'neo4j-driver';

const clearData = async () => {
  const auth = {
    username: 'neo4j',
    password: 'booki'
  };
  const driver = neo4j.driver(
    'bolt://localhost:7687',
    neo4j.auth.basic(auth.username, auth.password)
  );

  const session = driver.session();
  try {
    await session.run('match(n) detach delete n');
  } catch (err) {
    console.log(err);
  }
  session.close();
  driver.close();
};

const sendRequest = (url: string) => ({ query, parser = _ => _ }) => (
  variables: any
) => request(url, query, variables).then(parser);

const createUserRequest = (sendFunction: Function) =>
  sendFunction({
    query: `mutation CreateUser($name: String){
  CreateUser(name: $name ){
    name
    id
  }
}`,
    parser: prop('CreateUser')
  });

const createCafeRequest = (sendFunction: Function) =>
  sendFunction({
    query: `mutation CreateCafe($name: String, $description: String, $city: String){
  CreateCafe(name: $name, description: $description, city: $city){
    name
    id
  }
}`,
    parser: prop('CreateCafe')
  });

const linkCafeToUserRequest = (sendFunction: Function) =>
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

const linkCafesToUsers = (linkFunction: Function) => (users, cafes) =>
  users.forEach(({ id: userId }) => {
    cafes.forEach(({ id: cafeId }) => linkFunction({ userId, cafeId }));
  });

async function main() {
  const execRequest = sendRequest('http://localhost:3003/graphql');
  const createUser = createUserRequest(execRequest);
  const createCafe = createCafeRequest(execRequest);
  const linkCafeToUser = linkCafeToUserRequest(execRequest);

  await clearData();

  const martin = await createUser({ name: 'Martin' });

  const fiona = await createUser({
    name: 'Fiona'
  });

  const lucy = await createUser({
    name: 'Lucy'
  });

  const lisa = await createUser({
    name: 'Lisa'
  });

  const fantasyCafe = await createCafe({
    city: 'Pornic',
    name: 'Le petit fantaisiste',
    type: 'LOCAL',
    description: `Dolores dolore vero vitae mollitia aut laboriosam neque. Officia qui libero rerum. Quia possimus dolore excepturi sed soluta. Voluptatem ipsa qui placeat et quia ut. Sed consectetur corrupti quod. Necessitatibus suscipit iste in.
  Architecto nisi in ratione. Tempore sit nisi qui non dolor. Ut adipisci amet nulla qui dolore eaque omnis. Aliquam voluptas officia modi maiores debitis nemo et. Ut ratione est dolor perferendis facilis nisi ut.`
  });

  const leMansCafe = await createCafe({
    city: 'Le Mans',
    name: 'Le petit Café du Mans',
    type: 'LOCAL',
    description: `Dolores dolore vero vitae mollitia aut laboriosam neque. Officia qui libero rerum. Quia possimus dolore excepturi sed soluta. Voluptatem ipsa qui placeat et quia ut. Sed consectetur corrupti quod. Necessitatibus suscipit iste in.
  Architecto nisi in ratione. Tempore sit nisi qui non dolor. Ut adipisci amet nulla qui dolore eaque omnis. Aliquam voluptas officia modi maiores debitis nemo et. Ut ratione est dolor perferendis facilis nisi ut.`
  });

  const nantesCafe = await createCafe({
    city: 'Nantes',
    name: 'Le petit café des nantaise',
    type: 'LOCAL',
    description: `Dolores dolore vero vitae mollitia aut laboriosam neque. Officia qui libero rerum. Quia possimus dolore excepturi sed soluta. Voluptatem ipsa qui placeat et quia ut. Sed consectetur corrupti quod. Necessitatibus suscipit iste in.
  Architecto nisi in ratione. Tempore sit nisi qui non dolor. Ut adipisci amet nulla qui dolore eaque omnis. Aliquam voluptas officia modi maiores debitis nemo et. Ut ratione est dolor perferendis facilis nisi ut.`
  });

  const users = [martin, fiona, lisa, lucy];
  const cafes = [fantasyCafe, leMansCafe, nantesCafe];

  linkCafesToUsers(linkCafeToUser)(users, cafes);
}

main();
