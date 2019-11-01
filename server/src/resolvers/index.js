const Query = require('./Query');
const Cafe = require('./Cafe');
const User = require('./User');
const DateTime = require('./DateTime');
const Meetup = require('./Meetup');
const UserIdentity = require('./UserIdentity');

module.exports = Object.assign(
  {},
  { Query },
  { Cafe },
  { User },
  { DateTime },
  { Meetup },
  { UserIdentity }
);
