import { Avatar, IconButton, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import axios from "axios";

const Friend = ({ friend }) => {
  const [nbPosts, setnbPosts] = useState(0);
  const [nbFriends, setnbFriends] = useState(0);
  const [errMsg, setErrMsg] = useState("");

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
          {friend.firstName[0]}
          {friend.lastName[0]}
        </Avatar>
      </Grid>
      <Grid item container direction="column" width={0.9}>
        <Grid item>
          <Typography variant="subtitle2">{`${friend.firstName} ${friend.lastName}`}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" style={{ wordBreak: "break-word" }}>
            {nbPosts} Posts, {nbFriends} Amis
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Friend;
