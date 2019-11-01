const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Schema = new mongoose.Schema({
  firstname: { type: String, require: true },
  surname: { type: String, require: true },
  pic: String,
  cafeIds: [ObjectId],
  meetupsIds: [ObjectId]
});

module.exports = mongoose.model('User', Schema);
