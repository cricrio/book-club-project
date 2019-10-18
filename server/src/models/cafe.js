const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  name: { type: String, require: true },
  city: { type: String },
  membersCount: { type: Number },
  meetupCount: { type: Number }
});

module.exports = mongoose.model('Cafe', Schema);
