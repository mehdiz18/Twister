const mongoose = require("mongoose");

const CounterSchema = new mongoose.Schema({
  collection_name: { type: String, unique: true },
  counter_value: Number,
});

const Counter = mongoose.model("Counter", CounterSchema);

const initCounter = async (collectionName) => {
  let counter = await Counter.create({
    collection_name: collectionName,
    counter_value: 0,
  });
};

const updateCounter = async (collectionName) => {
  let count = await Counter.findOne({ collection_name: collectionName });
  await Counter.findOneAndUpdate(
    { collection_name: collectionName },
    {
      $inc: { counter_value: 1 },
    }
  );
};

const getNextAvailableCounter = async (collectionName) => {
  let count = await Counter.findOne({ collection_name: collectionName });
  if (count == null) {
    await initCounter(collectionName);
    return 0;
  }
  return count.counter_value;
};

const deleteCounter = async (collectionName) => {
  let count = await Counter.findOneAndDelete({
    collection_name: collectionName,
  });
  console.log(`[DB] ${collectionName.ca} Counter reset`.blue);
};

module.exports = { getNextAvailableCounter, updateCounter, deleteCounter };
