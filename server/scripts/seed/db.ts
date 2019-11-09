import { v1 as neo4j } from 'neo4j-driver';

export const clearData = async () => {
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
