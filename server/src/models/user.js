const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  name: { type: String, require: true },
  cafeIds: [String],
  meetupsIds: [String]
});

module.exports = mongoose.model('User', Schema);
