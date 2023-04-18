const mongoose = require("mongoose");
const MessageMiddleware = require("../../middleware/MessageMiddleware");
const messageSchema = new mongoose.Schema(
  {
    _id: Number,
    content: { type: String, required: [true, "Please set message content"] },
    postDate: {
      type: Date,
      required: [true, "Please set post Date"],
      default: Date.now,
    },
    user: {
      type: Number,
      required: [true, "Please set the userId"],
      ref: "User",
    },
    likes: { type: Number, default: 0 },
    likers: {
      type: [{ type: Number, ref: "User" }],
      default: [],
    },
    comments: {
      type: [{ type: Number, ref: "Messages" }],
      default: [],
    },
  },
  { _id: false }
);

messageSchema.pre("save", MessageMiddleware.addIdAndDate);
messageSchema.post(
  ["deleteOne", "deleteMany", "findOneAndDelete", "findOneAndRemove"],
  MessageMiddleware.deleteMessageCounter
);
module.exports = mongoose.model("Messages", messageSchema);
