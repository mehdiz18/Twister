const express = require("express");
const router = express.Router();
const Messages = require("../entities/Messages/MessagesController");

router.get("/:id", Messages.getListMessage);
router.post("/", Messages.postMessage);
// router.get("/infos", Messages.getMessageInfos);
router
  .route("/:id/infos")
  .put(Messages.updateMessageInfos)
  .get(Messages.getMessageInfos);
router
  .route("/:id/comments")
  .get(Messages.getComments)
  .post(Messages.postComment);
router
  .put("/:id", Messages.updateMessage)
  .delete("/:id", Messages.deleteMessage);
module.exports = router;
