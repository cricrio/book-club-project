const { MongoDataSource } = require('apollo-datasource-mongodb');

class Cafes extends MongoDataSource {
  getCafe(cafeId) {
    return this.model.findById(cafeId);
  }
  getAllCafes() {
    return this.model.find({});
  }
}

module.exports = Cafes;
