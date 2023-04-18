const Counter = require("../entities/Counter");

async function addId(next) {
  let id = await Counter.getNextAvailableCounter("friends");
  await Counter.updateCounter("friends");
  this._id = id;
  next();
}

async function deleteFriendCounter(next) {
  let count = await this.model.count();
  if (count == 0) {
    await Counter.deleteCounter("friends");
  }
}
module.exports = { addId, deleteFriendCounter };
