const Counter = require("../entities/Counter");

async function addId(next) {
  let id = await Counter.getNextAvailableCounter("users");
  await Counter.updateCounter("users");
  this._id = id;
  next();
}

async function deleteUserCounter(next) {
  let count = await this.model.count();
  if (count == 0) {
    await Counter.deleteCounter("users");
  }
}
exports.UserMiddleware = { addId, deleteUserCounter };
