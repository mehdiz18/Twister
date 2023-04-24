const asyncHandler = require("express-async-handler");
const Friends = require("../Friends/Friends");
const User = require("../Users/User");

const getListFriends = asyncHandler(async (req, res) => {
  let friends = await Friends.find({
    $or: [{ friend1: req.params.id }, { friend2: req.params.id }],
  })
    .populate("friend1")
    .populate("friend2");
  if (!friends) {
    res.status(404);
    throw new Error("User is not existing");
  }
  res.json(friends);
});

const postFriend = asyncHandler(async (req, res) => {
  let userId1 = req.body.friendId1;
  let userId2 = req.body.friendId2;
  if (!userId1 || !userId2) {
    res.status(400);
    throw new Error("Please verify args");
  }
  let user1 = await User.findById(userId1);
  if (!user1) {
    res.status(404);
    throw new Error("UserId1 not found");
  }
  let user2 = await User.findById(userId2);
  if (!user2) {
    res.status(404);
    throw new Error("UserId2 not found");
  }
  let friends = await Friends.create({ friend1: userId1, friend2: userId2 });
  res.status(200).json(friends);
});

const deleteFriend = asyncHandler(async (req, res) => {
  let friend1 = req.body.friendId1;
  let friend2 = req.body.friendId2;
  if (!friend1 || !friend2) {
    res.status(400);
    throw new Error("Please verify args");
  }
  let friendship = await Friends.findOneAndDelete({
    $or: [
      {
        $and: [{ friend1: friend1 }, { friend2: friend2 }],
      },
      {
        $and: [{ friend1: friend2 }, { friend2: friend1 }],
      },
    ],
  });
  if (!friendship) {
    res.status(404);
    throw new Error("One of the UserId is not found");
  }
  res.status(200).json({ message: "deleted" });
});

module.exports = { getListFriends, postFriend, deleteFriend };
