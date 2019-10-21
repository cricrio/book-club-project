const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Schema = new mongoose.Schema({
  cafeId: { type: String, required: true },
  name: { type: String, require: true },
  date: Date,
  localisation: String,
  participantsCount: { type: Number, default: 0 },
  participantIds: [ObjectId]
});

module.exports = mongoose.model('Meetup', Schema);
