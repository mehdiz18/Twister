const mongoose = require("mongoose");
const User = require("./User");
const asyncHandler = require("express-async-handler");
const colors = require("colors");

const getUser = asyncHandler(async (req, res) => {
  let user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  res.status(200).json(user);
});

const postUser = asyncHandler(async (req, res) => {
  if (
    !(
      req.body.email &&
      req.body.firstName &&
      req.body.lastName &&
      req.body.password
    )
  ) {
    res.status(400);
    throw new Error("Please verify arguments");
  }
  let verif = await User.findOne({ email: req.body.email });
  if (verif) {
    res.status(500);
    throw Error("User déja existant");
  }
  let user = await User.create({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  });
  res.status(201).json(user);
});

const updateUser = asyncHandler(async (req, res) => {
  if (!req.body.password) {
    res.status(400);
    throw new Error("Please provide a new password");
  }

  let user = await User.findOneAndUpdate(
    { email: req.body.email },
    { password: req.body.password },
    { returnDocument: "after" }
  );
  if (!user) {
    res.status(404);
    throw new Error("Invalid Email");
  }
  res.status(200).json(user);
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  res.json({ id: user.id, deleted: true });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  if (user && user.password === password) {
    req.session.userId = user._id;
    res.status(200).json({ id: req.session.id, userId: user._id });
    return;
  }
  res.status(401);
  throw new Error("Invalid password");
});

const logoutUser = (req, res) => {
  if (!req.session.userId) {
    res.status(500);
    throw new Error("No session opened");
  }
  req.session.destroy();
  res.status(200).json({ message: "Session closed" });
};

const getUsersInfos = async (req, res) => {
  let nombre = await User.countDocuments();
  res.status(200).json({
    message: `le nombre des utilisateurs est ${nombre}`,
  });
};

module.exports = {
  getUser,
  postUser,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
  getUsersInfos,
};
