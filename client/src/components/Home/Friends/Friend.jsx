import { Avatar, Link, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ProfileDialog from "./ProfileDialog";

const Friend = ({ friend }) => {
  const [nbPosts, setnbPosts] = useState(0);
  const [nbFriends, setnbFriends] = useState(0);
  // const [errMsg, setErrMsg] = useState("");
  const [openProfil, setOpenProfil] = useState(false);
  const friendId = useRef(-1);


  const handleOpenDialogProfil = () => {
    setOpenProfil(true);
  };
  const handleCloseDialogProfil = () => {
    setOpenProfil(false);
  };

  friendId.current = friend._id;
  useEffect(() => {
    (async () => {
      let response = await axios.get(
        `http://127.0.0.1:5000/api/friends/${friend._id}`
      );
      setnbFriends(response.data.length);

      let response1 = await axios.get(
        `http://127.0.0.1:5000/api/messages/${friend._id}`
      );
      setnbPosts(response1.data.length);
    })();
  }, [friend._id]);

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
        <Grid item >
          <Link 
            variant="h5" 
            underline="hover" 
            color = "black"
            
            onClick={handleOpenDialogProfil}
            >
            {`${friend.firstName} ${friend.lastName}`}
          </Link>
          <ProfileDialog
                friendId = {friendId}
                open={openProfil}
                handleClose={handleCloseDialogProfil}
            ></ProfileDialog>
        </Grid>
        <Grid item>
          <Typography variant="body3" style={{ wordBreak: "break-word" }}>
            {nbPosts} Posts, {nbFriends} Amis
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Friend;
