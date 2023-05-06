/* eslint-disable no-unused-vars */
import { Person } from "@mui/icons-material";
import { Avatar, Button, Grid, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useEffect, useState } from "react";
import ListTwist from "../Twist/ListTwist";
import ListFriends from "../Friends/ListFriends";
import NavBar from "./NavBar";
import axios from "axios";
import useFriends from "../../../hooks/useFriends";
import axiosConfig from "../../../hooks/consts";

const Profile = ({ userId, visitorId }) => {
  const [errMsg, setErrMsg] = useState("");
  const [twists, setTwists] = useState([]);
  const [userName, setUserName] = useState("");
  const [friendsCount, setFriendsCount] = useState(0);
  const [isFriend, setIsFriend] = useState(false);
  let [friends] = useFriends(userId);

  useEffect(() => {
    for (let f of friends) {
      if (f._id === visitorId.current) {
        setIsFriend(true);
      } else if (f._id === visitorId.current) {
        setIsFriend(true);
      }
    }
  }, [visitorId, friends]);

  useEffect(() => {
    (async () => {
      let response = await axios.get(
        `http://127.0.0.1:5000/api/users/${userId.current}`
      );
      setUserName(response.data.firstName + " " + response.data.lastName);
    })();
  }, [userId]);

  useEffect(() => {
    getMessages(userId);
  }, [userId]);

  useEffect(() => {
    (async () => {
      let response = await axios.get(
        `http://127.0.0.1:5000/api/friends/${userId.current}`
      );
      setFriendsCount(response.data.length);
    })();
  }, [userId]);

  const getMessages = async (userId) => {
    try {
      let response = await axios.get(
        `http://127.0.0.1:5000/api/messages/${userId.current}`
      );

      let messages = response.data;
      setTwists(messages);
    } catch (err) {
      setErrMsg("Erreur Lors de connexion au serveur");
      console.log(err);
    }
  };

  const deleteTwist = async (messageId) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/api/messages/${messageId}`);
      setTwists(
        twists.filter(function (twist) {
          return twist._id !== messageId;
        })
      );
    } catch (err) {
      setErrMsg("Erreur Lors de connexion au serveur");
      console.log(errMsg);
    }
  };

  const modifyTwist = async (messageId, newContent) => {
    await axios.put(
      `http://127.0.0.1:5000/api/messages/${messageId}`,
      { content: newContent },
      axiosConfig
    );
    setTwists(
      twists.map(function (twist) {
        return twist._id === messageId
          ? {
              _id: twist._id,
              content: newContent,
              user: twist.user,
              likes: twist.likes,
              likers: twist.likers,
            }
          : twist;
      })
    );
  };

  const deleteFriend = () => {
    setIsFriend(!isFriend);
  };
  const [tabValue, setTabValue] = useState(0);
  const tabs = [
    <ListTwist
      twists={twists}
      userId={userId}
      deleteTwist={deleteTwist}
      modifyTwist={modifyTwist}
    />,
    <ListFriends userId = {userId} friends={friends} />,
  ];

  const addFriend = async() => {
    
    let friend1 = userId.current;
    let friend2 = visitorId.current;

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

  const handleTabChange = (value) => {
    setTabValue(value);
  };
  return (
    <Grid container direction="column" pt={3}>
      <Grid item container direction="column" alignItems="center">
        <Avatar sx={{ bgcolor: deepOrange[300], width: 100, height: 100 }}>
          <Person sx={{ fontSize: 70 }}></Person>
        </Avatar>
        <Typography variant="h5" mt={2}>
          {userName}
        </Typography>
        {visitorId.current !== userId.current ? (
          !isFriend ? (
            <Button
              variant="contained"
              sx={{ width: "30%" }}
              onClick={addFriend}
            >
              Ajouter
            </Button>
          ) : (
            <Button
              variant="outlined"
              sx={{
                width: "30%",
                backgroundColor: "#ffffff !important",
                borderWidth: "3px !important",
              }}
              onClick={deleteFriend}
            >
              Amis
            </Button>
          )
        ) : (
          <></>
        )}
        <Grid alignSelf="flex-start" item container pl={4}>
          <Typography variant="h6">{friendsCount} Amis</Typography>
        </Grid>
      </Grid>
      <Grid item container width={1}>
        <Grid item width={1}>
          <NavBar handleChange={handleTabChange}></NavBar>
        </Grid>
        {tabs[tabValue]}
      </Grid>
    </Grid>
  );
};

export default Profile;
