import {
  ChatBubbleOutline,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import { Avatar, IconButton, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import axios from "axios";

const Twist = ({ message, userId }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikesCount] = useState(message.likes);
  const [errMsg, setErrMsg] = useState("");

  const likeTwist = async (id) => {
    try {
      await axios.put(`http://127.0.0.1:5000/api/messages/${id}/infos`, {
        user: userId.current,
        update: "true",
      });
    } catch (err) {
      setErrMsg("Erreur Lors de connexion au serveur");
      console.log(err);
    }
    setLikesCount(likes + 1);
  };

  const dislikeTwist = async (id) => {
    try {
      await axios.put(`http://127.0.0.1:5000/api/messages/${id}/infos`, {
        user: userId.current,
        update: "false",
      });
    } catch (err) {
      setErrMsg("Erreur Lors de connexion au serveur");
      console.log(err);
    }
    setLikesCount(likes - 1);
  }; 

  const alreadyLiked = (id) => {

    try {
     
      return axios.get(`http://127.0.0.1:5000/api/messages/${id}/infos`).then((response)=>{
        return response.data.Likers.includes(userId.current);
        
      });
    } catch (err) {
      setErrMsg("Erreur Lors de connexion au serveur");
      console.log(err);
    }
    
  }

  const toggleLike = async (id) => {
    !isLiked ? likeTwist(id) : dislikeTwist(id);
    setIsLiked(!isLiked);
  };

  useEffect(()=>{
    alreadyLiked(message._id).then((exists)=>{
      setIsLiked(exists);
    });
  }, []);

  const addComment = ({ messageId, comment }) => {
    // let liste = document.getElementById("listecommissions");
    // let elt = document.createElement("li");
    // let newText = document.createTextNode("texte");
    // elt.appendChild(newText);
    // liste.appendChild(elt);
    console.log("Hello");
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
          <Typography variant="subtitle2">{`${message.user.firstName} ${message.user.lastName}`}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" style={{ wordBreak: "break-word" }}>
            {message.content}
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item>
            <IconButton disableRipple onClick={addComment}>
              <ChatBubbleOutline />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              disableRipple
              disableTouchRipple
              disableFocusRipple
              onClick={() => {
                toggleLike(message._id);
              }}
            >
              {isLiked ? <Favorite color="error" /> : <FavoriteBorder />}
              <Typography ml={1}>{likes}</Typography>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Twist;
