import { Avatar, Link, Typography, Button } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ProfileDialog from "../Dialog/ProfileDialog";
import axiosConfig from "../../../hooks/consts";

const User = ({ userId, user }) => {
  const [nbPosts, setnbPosts] = useState(0);
  const [nbFriends, setnbFriends] = useState(0);
  const [errMsg, setErrMsg] = useState("");
  const [openPro, setOpenPro] = useState(false);
  const [isFriend, setIsFriend] = useState(false);
  const userIde = useRef(-1);


  const handleOpenDialogPro = () => {
    setOpenPro(true);
  };
  const handleCloseDialogPro = () => {
    setOpenPro(false);
  };

  const addFriend = async() => {
    
    let friend1 = userId.current;
    let friend2 = user._id;

    try {

      let response = await axios.post(
        `http://127.0.0.1:5000/api/friends/`, 
        {
          friendId1 : friend1,
          friendId2 : friend2,
        }, 
        axiosConfig
      );
      setIsFriend(true);
    } catch (err) {
      setErrMsg("Erreur Lors de connexion au serveur");
      console.log(err);
    } 

  }

  userIde.current = user._id;
  useEffect(() => {
    (async () => {
      let response = await axios.get(
        `http://127.0.0.1:5000/api/friends/${user._id}`
      );
      setnbFriends(response.data.length);

      let response1 = await axios.get(
        `http://127.0.0.1:5000/api/messages/${user._id}`
      );
      setnbPosts(response1.data.length);
    })();
  }, [user._id]);

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
          {user.firstName[0]}
          {user.lastName[0]}
        </Avatar>
      </Grid>
      <Grid item container direction="column" width={0.9}>
        <Grid item >
          <Link 
            variant="h5" 
            underline="hover" 
            color = "black"
            
            onClick={handleOpenDialogPro}
            >
            {`${user.firstName} ${user.lastName}`}
          </Link>
          <ProfileDialog
                visitorId={userId}
                friendId = {userIde}
                open={openPro}
                handleClose={handleCloseDialogPro}
            ></ProfileDialog>
        </Grid>
        <Grid item>
          <Typography variant="body3" style={{ wordBreak: "break-word" }}>
            {nbPosts} Posts, {nbFriends} Amis
          </Typography>
        </Grid>
        {!isFriend ? 
        (<Button 
              className="addButton"
              variant="contained"
              //sx={{ width: "30%" }}
              onClick={addFriend}
            >
              Ajouter
        </Button>) : (
        <Button 
              variant="outlined"
              sx={{
                width: "30%",
                backgroundColor: "#ffffff !important",
                borderWidth: "3px !important",
              }}
              onClick={addFriend}
            >
              Amis
        </Button>)}
    </Grid>
    </Grid>
  );
};

export default User;
