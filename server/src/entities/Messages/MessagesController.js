const User = require("../Users/User");
const Message = require("./Message");
const asyncHandler = require("express-async-handler");

const getListMessage = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Please verify args");
  }
  const messages = await Message.find({ user: req.params.id }).populate(
    "user",
    ["id", "email", "firstName", "lastName"]
  );
  if (messages == null) {
    res.status(404);
    throw new Error("message not found");
  }
  res.status(200).json(messages);
});

const postMessage = asyncHandler(async (req, res) => {
  if (!req.body.content) {
    console.log(req.body.content);
    res.status(400);
    throw new Error("Please provide a content");
  } else if (!req.body.userId) {
    console.log(req.body.content);
    res.status(400);
    throw new Error("Please provide a userId");
  }
  const message = await Message.create({
    content: req.body.content,
    user: req.body.userId,
  });
  res.status(201).json(message);
});

const updateMessage = asyncHandler(async (req, res) => {
  let message = await Message.findByIdAndUpdate(
    req.params.id,
    {
      content: req.body.content,
    },
    { returnDocument: "after" }
  );
  if (!message) {
    res.status(404);
    throw new Error("message not found");
  }
  res.status(200).json(message);
});

const deleteMessage = asyncHandler(async (req, res) => {
  let message = await Message.findByIdAndRemove(req.params.id);
  if (!message) {
    res.status(404);
    throw new Error("message not found");
  }
  res.status(200).json({ id: message.id, deleted: true });
});

const updateMessageInfos = asyncHandler(async (req, res) => {
  if (!req.body.user || !req.body.update) {
    res.status(400);
    throw new Error("Please verify args");
  }

  let message = await Message.findById(req.params.id);
  if (!message) {
    res.status(404);
    throw new Error("Message not found");
  }

  
  let user = parseInt(req.body.user);

  if (req.body.update === "true") {

    let messageUpdated = await Message.findByIdAndUpdate(
      req.params.id,
      {
        $inc: {
          likes: 1,
        },
        $push: {
          likers: user,
        },
      },
      { returnDocument: "after" }
    )
      .populate("user")
      .populate("likers");
  
    res.status(200).json({
      message: "message infos updated successfully",
      msg: messageUpdated,
    });
    console.log(messageUpdated);
  } 
  else {
    let messageUpdated = await Message.findByIdAndUpdate(
      req.params.id,
      {
        $inc: {
          likes: -1,
        },
        $pullAll: {
          likers: [user],
        },
      },
      { returnDocument: "after" }
    )
      .populate("user")
      .populate("likers");
  
    res.status(200).json({
      message: "message infos updated successfully",
      msg: messageUpdated,
    });
  }
});

const getMessageInfos = asyncHandler(async (req, res) => {
  let message = await Message.findById(req.params.id).populate("user");
  if (!message) {
    res.status(404);
    throw new Error("Message not found");
  }
  res.status(200).json({
    message: `Voilà quelque informations sur le message d'id ${req.params.id}`,
    Possessor: message.id,
    NbLikes: message.likes,
    Likers: message.likers,
  });
});

const postComment = asyncHandler(async (req, res) => {
  let message = await Message.findById(req.params.id);

  if (!message) {
    res.status(404);
    throw new Error("Message not found");
  }

  if (!req.body.content || !req.body.userId) {
    res.status(400);
    throw new Error("Please provide a content and a userId");
  }

  const comment = await Message.create({
    content: req.body.content,
    user: req.body.userId,
  });

  let messageUpdated = await Message.findByIdAndUpdate(
    req.params.id,
    {
      $push: {
        comments: comment,
      },
    },
    { returnDocument: "after" }
  ).populate("comments");

  res.status(200).json({
    message: "Comment posted successfully",
    lel: messageUpdated.comments,
    comment: comment.content,
    user: comment.user,
  });
});

const getComments = async (req, res) => {
  let message = await Message.findById(req.params.id);

  if (!message) {
    res.status(404);
    throw new Error("Message not found");
  }

  res.json(message.comments);
};

const getMessagesLessThenOneHour = async (req, res) => {
  var datedujourMoins1h = new Date() - 60 * 60 * 1000;
  var inputDate = new Date(datedujourMoins1h);
  let messages = await Message.find({
    postDate: { $gt: inputDate },
  });

  res.status(200).json(messages);
};

const mehdiFunction = asyncHandler(async (req, res) => {
  let current = new Date();
  current.setHours(current.getHours() - 1);

  let messages = await Message.find({
    postDate: { $gt: current.toISOString() },
  });
  res.json(messages);
});
module.exports = {
  updateMessage,
  deleteMessage,
  postMessage,
  getListMessage,
  getMessageInfos,
  updateMessageInfos,
  postComment,
  getComments,
  getMessagesLessThenOneHour,
  mehdiFunction,
};
