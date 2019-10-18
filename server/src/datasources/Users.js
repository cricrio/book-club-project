const { MongoDataSource } = require('apollo-datasource-mongodb');

class Users extends MongoDataSource {
  getUsersFromCafe(cafeId) {
    return this.model.find({ cafeIds: { $in: [cafeId] } });
  }
}

module.exports = Users;
