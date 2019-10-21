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
  membersCount: { type: Number, default: 0 },
  meetupCount: { type: Number, default: 0 }
});

module.exports = mongoose.model('Cafe', Schema);
