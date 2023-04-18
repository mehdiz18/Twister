const express = require("express");
const {
  getListFriends,
  postFriend,
  deleteFriend,
} = require("../entities/Friends/FriendsController");
const router = express.Router();
router.get("/", getListFriends).post("/", postFriend).delete("/", deleteFriend);
module.exports = router;
