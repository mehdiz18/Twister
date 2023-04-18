const express = require("express");

const router = express.Router();
router.use("/api/messages", require("./routes/messagesRoutes"));
router.use("/api/users", require("./routes/userRoutes"));
router.use("/api/friends", require("./routes/friendsRoutes"));

module.exports = router;
