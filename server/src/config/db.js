const mongoose = require("mongoose");
const session = require("express-session");

const colors = require("colors");

const url =
"mongodb://127.0.0.1:27017/Twister";

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(url);
    console.log(
      `[DB] Connected on ${conn.connection.host}:${conn.connection.port}`
        .magenta
    );
  } catch (error) {
    console.log(error);
  }
};
module.exports = { connectToDB, url };
