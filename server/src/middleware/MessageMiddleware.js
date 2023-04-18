const Counter = require("../entities/Counter");

async function addIdAndDate(next) {
  let id = await Counter.getNextAvailableCounter("messages");
  await Counter.updateCounter("messages");
  this._id = id;
  next();
}

async function deleteMessageCounter(next) {
  let count = await this.model.count();
  if (count == 0) {
    await Counter.deleteCounter("messages");
  }
}
module.exports = { addIdAndDate, deleteMessageCounter };
