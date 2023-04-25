import { Person } from "@mui/icons-material";
import { Avatar, Button, Grid, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useEffect, useState } from "react";
import ListTwist from "../Twist/ListTwist";
import ListFriends from "../Friends/ListFriends";
import NavBar from "./NavBar";
import axios from "axios";
import useFriends from "../../../hooks/useFriends";

const Profile = ({ userId }) => {
  const [errMsg, setErrMsg] = useState("");
  const [twists, setTwists] = useState([]);
  const [userName, setUserName] = useState("");
  const [friendsCount, setFriendsCount] = useState(0);
  let [friends] = useFriends(userId);
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
  const [tabValue, setTabValue] = useState(0);
  const tabs = [
    <ListTwist twists={twists} userId={userId} />,
    <ListFriends friends={friends} />,
  ];
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
        <Button variant="contained" sx={{ width: "30%" }}>
          Ajouter
        </Button>
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
