const express = require("express");
const errorHandler = require("./middleware/ErrorMiddleware");
const session = require("express-session");
const { connectToDB, url } = require("./config/db");
const router = require("./routes");
const { populateDb } = require("./config/initDb");
const { dbStats } = require("./config/dbStats");
const { MongoDBStore } = require("connect-mongodb-session");

const app = express();

app.use(
  session({
    secret: "azul fellak",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
connectToDB();
populateDb();
dbStats();
app.use(errorHandler);

module.exports = app;
