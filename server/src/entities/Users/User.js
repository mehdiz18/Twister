const mongoose = require("mongoose");
const { UserMiddleware } = require("../../middleware/UserMiddleware");
const { addId, deleteUserCounter } = UserMiddleware;

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    firstName: String,
    lastName: String,
    password: String,
    _id: Number,
  },
  { _id: false }
);

userSchema.pre("save", addId);
userSchema.post(
  ["deleteOne", "deleteMany", "findOneAndDelete", "findOneAndRemove"],
  deleteUserCounter
);
module.exports = mongoose.model("User", userSchema);
