const axios = require("axios");
const { faker } = require("@faker-js/faker");
const User = require("../entities/Users/User");
const Friend = require("../entities/Friends/Friends");
const Message = require("../entities/Messages/Message");
const colors = require("colors");

const population = 5;

const populateDb = async () => {
  let users = await User.find();
  let friends = await Friend.find();
  let messages = await Message.find();

  //Populate Users
  if (users.length != 0) {
    console.log("[DB Init] Don't need to populate Users".yellow);
  } else {
    await populateUsers();
    console.log("[DB Init] Populated Users".yellow);
  }

  //Populate messages
  if (messages.length != 0) {
    console.log("[DB Init] Don't need to populate Messages".yellow);
  } else {
    await populateMessages();
    console.log("[DB Init] Populated Messages".yellow);
  }

  //Populate friends
  if (friends.length != 0) {
    console.log("[DB Init] Don't need to populate Friends".yellow);
  } else {
    await populateFriends();
    console.log("[DB Init] Populated Friends".yellow);
  }
};

const populateUsers = async () => {
  for (var i = 0; i < 4 * population; i++) {
    let email = faker.internet.email();
    let password = faker.internet.password((memorable = true));
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let response = await User.create({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });
  }
};

const populateMessages = async () => {
  let users = await User.aggregate().sample(2.5 * population);
  for (let user of users) {
    let content = faker.lorem.paragraph();
    let messages = await Message.create({
      content: content,
      user: user._id,
    });
  }
};

const populateFriends = async () => {
  for (let i = 0; i < population; i++) {
    let users = await User.aggregate().sample(2);
    let exists = await Friend.findOne({
      $or: [
        {
          $and: [{ friend1: users[0]._id }, { friend2: users[1]._id }],
        },
        {
          $and: [{ friend1: users[1]._id }, { friend2: users[0]._id }],
        },
      ],
    });
    if (!exists) {
      await Friend.create({
        friend1: users[0]._id,
        friend2: users[1]._id,
      });
    }
  }
};

module.exports = { populateDb };
