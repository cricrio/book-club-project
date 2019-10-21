const { MongoDataSource } = require('apollo-datasource-mongodb');

class Meetups extends MongoDataSource {
  getMeetups(cafeId) {
    return this.model.find({ cafeId });
  }
}

module.exports = Meetups;
