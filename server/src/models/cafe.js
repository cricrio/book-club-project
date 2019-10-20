const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  name: { type: String, require: true },
  type: {
    type: String,
    enum: ['LOCAL', 'ONLINE']
  },
  city: { type: String },
  description: String,
  pic: String,
  membersCount: { type: Number },
  meetupCount: { type: Number }
});

module.exports = mongoose.model('Cafe', Schema);
