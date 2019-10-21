const { MongoDataSource } = require('apollo-datasource-mongodb');

class Cafes extends MongoDataSource {
  getCafe(cafeId) {
    return this.model.findById(cafeId);
  }
  getAllCafes() {
    return this.model.find({});
  }
  //TODO Add tests
  /**
   * @description if asc is true increment membersCount of 1 if not decrement of 1
   * @param {*} cafeId
   * @param {*} asc -
   */
  incrementMembersCount(cafeId, asc) {
    const step = asc ? 1 : -1;
    return this.model.findOneAndUpdate(
      { _id: cafeId },
      {
        $inc: { membersCount: step }
      }
    );
  }
}

module.exports = Cafes;
