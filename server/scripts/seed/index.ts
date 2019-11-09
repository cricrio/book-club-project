import { clearData } from './db';

import {
  sendRequest,
  createCafeRequest,
  createMeetupRequest,
  createUserRequest,
  linkCafeToUserRequest,
  linkCafeToMeetupRequest
} from './request';

class DateTime {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;

  constructor(dateTimestamp?: string) {
    const date = dateTimestamp ? new Date(dateTimestamp) : new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.day = date.getDate();
    this.hour = date.getHours();
    this.minute = date.getMinutes();
  }
}

const linkCafesToUsers = (linkFunction: Function) => (users, cafes) =>
  users.forEach(({ id: userId }) => {
    cafes.forEach(({ id: cafeId }) => linkFunction({ userId, cafeId }));
  });

const linkCafeToMeetups = (linkFunction: Function) => (
  { id: cafeId },
  meetups = []
) => meetups.forEach(({ id: meetupId }) => linkFunction({ meetupId, cafeId }));

async function main() {
  const execRequest = sendRequest('http://localhost:3003/graphql');
  const createUser = createUserRequest(execRequest);
  const createCafe = createCafeRequest(execRequest);
  const createMeetup = createMeetupRequest(execRequest);
  const linkCafeToUser = linkCafeToUserRequest(execRequest);
  const linkCafeToMeetup = linkCafeToMeetupRequest(execRequest);

  await clearData();

  const meetupFantasyOne = await createMeetup({
    name: 'Meetup #1',
    date: new DateTime('2019-12-01'),
    localisation: 'Café Mario'
  });

  const meetupFantasyTwo = await createMeetup({
    name: 'Meetup #1',
    date: new DateTime('2021-01-01'),
    localisation: 'Café Mario'
  });

  const meetupFantasyThree = await createMeetup({
    name: 'Meetup #1',
    date: new DateTime('2021-02-01'),
    localisation: 'Café Mario'
  });

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

  await linkCafeToMeetups(linkCafeToMeetup)(fantasyCafe, [
    meetupFantasyOne,
    meetupFantasyTwo,
    meetupFantasyThree
  ]);

  linkCafesToUsers(linkCafeToUser)(users, cafes);
}

main();
