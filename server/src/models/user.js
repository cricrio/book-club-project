const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  name: { type: String, require: true },
  pic: String,
  cafeIds: [String],
  meetupsIds: [String]
});

module.exports = mongoose.model('User', Schema);
