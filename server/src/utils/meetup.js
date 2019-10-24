const R = require('ramda');
const isBefore = require('date-fns/fp/isBefore');

const onDate = R.prop('date');

const meetupIsBefore = now =>
  R.pipe(
    onDate,
    isBefore(now)
  );

const groupByDate = now =>
  R.groupBy(
    R.cond([[meetupIsBefore(now), R.always('past')], [R.T, R.always('future')]])
  );

const sortByDateDesc = R.sort(R.descend(onDate));

const getLastItemInFuture = R.pipe(
  R.prop('future'),
  R.last
);

const addNextMeetup = meetup =>
  Object.assign({}, meetup, { next: getLastItemInFuture(meetup) });

const groupMeetupByDate = now =>
  R.pipe(
    sortByDateDesc,
    groupByDate(now),
    addNextMeetup
  );

const groupPastAndFutureMeetups = groupMeetupByDate(new Date());

module.exports = {
  addNextMeetup,
  onDate,
  meetupIsBefore,
  groupByDate,
  groupMeetupByDate,
  groupPastAndFutureMeetups,
  sortByDateDesc
};
