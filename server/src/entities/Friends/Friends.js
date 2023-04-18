const mongoose = require("mongoose");
const {
  addId,
  deleteFriendCounter,
} = require("../../middleware/FriendsMiddleware");
const friendsSchema = new mongoose.Schema(
  {
    _id: Number,
    friend1: {
      type: Number,
      ref: "User",
      required: [true, "Please specify friend1Id"],
    },
    friend2: {
      type: Number,
      ref: "User",
      required: [true, "Please specify friend2Id"],
    },
  },
  {
    _id: false,
  }
);
friendsSchema.pre("save", addId);
friendsSchema.post(
  ["deleteOne", "deleteMany", "findOneAndDelete", "findOneAndRemove"],
  deleteFriendCounter
);
module.exports = mongoose.model("friends", friendsSchema);
