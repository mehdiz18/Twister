import {
  ChatBubbleOutline,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import { Avatar, IconButton, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const Twist = ({ message }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(message.likes);

  const toggleLike = () => {
    !isLiked ? setLikesCount(likesCount + 1) : setLikesCount(likesCount - 1);
    setIsLiked(!isLiked);
  };

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
              // onClick={toggleLike}
            >
              {isLiked ? <Favorite color="error" /> : <FavoriteBorder />}
              {/* <Typography ml={1}>{likesCount}</Typography> */}
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Twist;
