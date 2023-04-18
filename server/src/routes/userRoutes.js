const express = require("express");
const {
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
  .get("/:id", getUser)
  .post("/", postUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser)
  

module.exports = router;
