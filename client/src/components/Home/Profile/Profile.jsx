import { Person } from "@mui/icons-material";
import { Avatar, Button, Grid, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useEffect, useState } from "react";
import ListTwist from "../Twist/ListTwist";
import NavBar from "./NavBar";
import axios from "axios";

const Profile = ({ userId }) => {
  const [errMsg, setErrMsg] = useState("");
  const [twists, setTwists] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getMessages(userId);
  }, []);

  const getMessages = async (userId) => {
    try {
      let response = await axios.get(
        `http://127.0.0.1:5000/api/messages/${userId.current}`
      );

      let messages = response.data;

      setUserName(
        response.data[0].user.firstName + " " + response.data[0].user.lastName
      );
      setTwists(messages);
    } catch (err) {
      setErrMsg("Erreur Lors de connexion au serveur");
      console.log(err);
    }
  };
  const [tabValue, setTabValue] = useState(0);
  const tabs = [<ListTwist twists={twists} />, <ListTwist twists={twists} />];
  const handleTabChange = (value) => {
    // console.log(value);
    setTabValue(value);
  };
  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      sx={{
        width: "100%",
        height: "100%",
      }}
      pt={3}
    >
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
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
          <Typography variant="h6">999 Amis</Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <NavBar handleChange={handleTabChange}></NavBar>
        {tabs[tabValue]}
      </Grid>
    </Grid>
  );
};

export default Profile;
