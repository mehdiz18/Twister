/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  ChatBubbleOutline,
  CreateOutlined,
  DeleteOutline,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import { Avatar, Button, Link, IconButton, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import axiosConfig from "../../../hooks/consts";
import ModifyDialog from "./ModifyDialog";
import AddComment from "./AddCommentDialog";
import ListComments from "./ListCommentsDialog";
import ProfileDialog from "../Friends/ProfileDialog";

const Twist = ({ message, userId, deleteTwist, modifyTwist }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikesCount] = useState(message.likes);
  const [errMsg, setErrMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openList, setOpenList] = useState(false);

  const [comments, setComments] = useState([]);
  const [commentsDetailed, setCommentsDetailed] = useState([]);
  const [nbComments, setNbComments] = useState(0);
  const [openProfil, setOpenProfil] = useState(false);

  const friendId = useRef(-1);

  friendId.current = message.user._id;

  const handleOpenDialogProfil = () => {
    setOpenProfil(true);
  };
  const handleCloseDialogProfil = () => {
    setOpenProfil(false);
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleOpenDialogAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseDialogAdd = () => {
    setOpenAdd(false);
  };

  const handleOpenDialogList = () => {
    setOpenList(true);
  };
  const handleCloseDialogList = () => {
    setOpenList(false);
  };

  const likeTwist = async (id) => {
    try {
      await axios.put(
        `http://127.0.0.1:5000/api/messages/${id}/infos`,
        {
          user: userId.current,
          update: "true",
        },
        axiosConfig
      );
    } catch (err) {
      setErrMsg("Erreur Lors de connexion au serveur");
      console.log(err);
    }
    setLikesCount(likes + 1);
  };

  const dislikeTwist = async (id) => {
    try {
      await axios.put(
        `http://127.0.0.1:5000/api/messages/${id}/infos`,
        {
          user: userId.current,
          update: "false",
        },
        axiosConfig
      );
    } catch (err) {
      setErrMsg("Erreur Lors de connexion au serveur");
      console.log(err);
    }
    setLikesCount(likes - 1);
  };

  const alreadyLiked = (id) => {
    try {
      return axios
        .get(`http://127.0.0.1:5000/api/messages/${id}/infos`)
        .then((response) => {
          return response.data.Likers.includes(userId.current);
        });
    } catch (err) {
      setErrMsg("Erreur Lors de connexion au serveur");
      console.log(err);
    }
  };

  const alreadyCommented = (id) => {
    try {
      return axios
        .get(`http://127.0.0.1:5000/api/messages/${id}/comments`)
        .then((response) => {
          return response.data;
        });
    } catch (err) {
      setErrMsg("Erreur Lors de connexion au serveur");
      console.log(err);
    }
  };

  const toggleLike = async (id) => {
    !isLiked ? likeTwist(id) : dislikeTwist(id);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    alreadyLiked(message._id).then((exists) => {
      setIsLiked(exists);
    });
    alreadyCommented(message._id).then((commentaires) => {
      setComments(commentaires);
      setNbComments(commentaires.length);
    });
  }, []);

  const addComment = async (id, commentaire) => {
    try {
      let response = await axios.post(
        `http://127.0.0.1:5000/api/messages/${id}/comments`,
        {
          content: commentaire,
          userId: userId.current,
        },
        axiosConfig
      );
      setNbComments(nbComments + 1);
    } catch (err) {
      setErrMsg("Erreur Lors de connexion au serveur");
      console.log(err);
    }
  };

  const showComments = async (id) => {
    try {
      let response = await axios.get(
        `http://127.0.0.1:5000/api/messages/${id}/comments`
      );
      setComments(response.data);

      let temp = response.data;
      try {
        let commentaires = [];
        for (let t of temp) {
          let res = await axios.get(
            `http://127.0.0.1:5000/api/messages/${t}/details`
          );
          commentaires.push(res.data);
        }
        setCommentsDetailed(commentaires);
      } catch (err) {
        setErrMsg("Erreur Lors de connexion au serveur");
        console.log(errMsg);
      }
    } catch (err) {
      setErrMsg("Erreur Lors de connexion au serveur");
      console.log(errMsg);
    }
  };
  return (
    <Grid
      container
      sx={{ border: "1px solid", borderColor: "divider" }}
      px={1}
      py={2}
      direction="row"
    >
      <Grid item mx={2} width={0.05}>
        <Avatar alt="userAvatar" sx={{ bgcolor: deepPurple[500] }}>
          {message.user.firstName[0]}
          {message.user.lastName[0]}
        </Avatar>
      </Grid>
      <Grid item container direction="column" width={0.9}>
        <Grid item>
          <Link
            variant="h6"
            underline="hover"
            color="black"
            onClick={handleOpenDialogProfil}
          >
            {`${message.user.firstName} ${message.user.lastName}`}
          </Link>
          <ProfileDialog
            friendId={friendId}
            visitorId={userId}
            open={openProfil}
            handleClose={handleCloseDialogProfil}
          ></ProfileDialog>
        </Grid>
        <Grid item>
          <Typography variant="body1" style={{ wordBreak: "break-word" }}>
            {message.content}
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item>
            <IconButton
              disableRipple
              onClick={handleOpenDialogAdd}
              aria-labelledby="commenter"
            >
              <ChatBubbleOutline label="commenter" />
            </IconButton>
            <AddComment
              message={message}
              open={openAdd}
              handleClose={handleCloseDialogAdd}
              addCallBack={addComment}
            ></AddComment>
          </Grid>

          <Grid item>
            <IconButton
              onClick={() => {
                toggleLike(message._id);
              }}
            >
              {isLiked ? <Favorite color="error" /> : <FavoriteBorder />}
              <Typography ml={1}>{likes}</Typography>
            </IconButton>
          </Grid>

          {modifyTwist ? (
            <Grid item>
              <IconButton disableRipple onClick={handleOpenDialog}>
                <CreateOutlined />
              </IconButton>
              <ModifyDialog
                message={message}
                open={open}
                handleClose={handleCloseDialog}
                modifyCallback={modifyTwist}
              ></ModifyDialog>
            </Grid>
          ) : (
            <></>
          )}
          {deleteTwist ? (
            <Grid item>
              <IconButton
                disableRipple
                onClick={() => {
                  deleteTwist(message._id);
                }}
              >
                <DeleteOutline />
              </IconButton>
            </Grid>
          ) : (
            <></>
          )}
          <Grid item>
            <Link
              underline="hover"
              color="black"
              component="button"
              variant="body2"
              sx={{ m: 1, p: 0.3 }}
              onClick={() => {
                showComments(message._id);
                handleOpenDialogList();
              }}
            >
              Commentaires ({nbComments})
            </Link>
            <ListComments
              userId={userId}
              comments={commentsDetailed}
              open={openList}
              handleClose={handleCloseDialogList}
            ></ListComments>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Twist;
