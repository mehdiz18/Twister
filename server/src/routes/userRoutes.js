const express = require("express");
const {
  getUsers,
  getUser,
  updateUser,
  postUser,
  deleteUser,
  loginUser,
  logoutUser,
  getUsersInfos,
} = require("../entities/Users/UsersController");

const router = express.Router();

router.post("/login", loginUser);
router.delete("/logout", logoutUser);
router.get("/infos", getUsersInfos);

router
  .get("/", getUsers)
  .get("/:id", getUser)
  .post("/", postUser)
  .put("/", updateUser)
  .delete("/:id", deleteUser);

module.exports = router;
