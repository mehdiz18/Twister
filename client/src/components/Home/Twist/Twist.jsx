import {
  ChatBubbleOutline,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import { Avatar, IconButton, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const Twist = ({ content }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(content.likesCount);
  const toggleLike = () => {
    !isLiked ? setLikesCount(likesCount + 1) : setLikesCount(likesCount - 1);
    setIsLiked(!isLiked);
  };
  return (
    <Grid
      container
      sx={{ border: "1px solid", borderColor: "divider" }}
      px={1}
      py={2}
      direction="row"
    >
      <Grid item xs={1} mx={2}>
        <Avatar alt="userAvatar" sx={{ bgcolor: deepPurple[500] }}>
          {content.user.name[0]}
          {content.user.surname[0]}
        </Avatar>
      </Grid>
      <Grid item container xs={10} rowSpacing={1} direction="column">
        <Grid item>
          <Typography variant="subtitle2">{`${content.user.name} ${content.user.surname}`}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" style={{ wordBreak: "break-word" }}>
            {content.message}
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item>
            <IconButton disableRipple>
              <ChatBubbleOutline />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              disableRipple
              disableTouchRipple
              disableFocusRipple
              onClick={toggleLike}
            >
              {isLiked ? <Favorite color="error" /> : <FavoriteBorder />}
              <Typography ml={1}>{likesCount}</Typography>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Twist;
