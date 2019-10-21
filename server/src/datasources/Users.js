const { MongoDataSource } = require('apollo-datasource-mongodb');

class Users extends MongoDataSource {
  getUsersFromCafe(cafeId) {
    return this.model.find({ cafeIds: { $in: [cafeId] } });
  }
  getById(userId) {
    return this.model.findById(userId);
  }
}

module.exports = Users;
