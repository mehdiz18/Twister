import { Person } from "@mui/icons-material";
import { Avatar, Button, Grid, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useState } from "react";
import ListTwist from "../Twist/ListTwist";
import NavBar from "./NavBar";

const Profile = () => {
  const twists = [
    {
      id: 1,
      user: {
        name: "Mehdi",
        surname: "ZENINE",
      },
      message:
        "Aute laborum ipsum ut proident nostrud cupidatat nostrud consectetur fugiat. Id pariatur proident consectetur ipsum commodo magna excepteur non. Magna adipisicing et dolore do cupidatat consectetur cupidatat anim aute voluptate enim. Lorem exercitation ut labore Lorem cupidatat ut eiusmod anim. Velit labore elit nisi labore ullamco velit sunt consequat ipsum est cillum dolore. Id ea ullamco mollit excepteur enim amet minim aliquip ut occaecat deserunt.",
      likesCount: 3,
    },
    {
      id: 2,
      user: {
        name: "Diva",
        surname: "REBECCA",
      },
      message:
        "Aute laborum ipsum ut proident nostrud cupidatat nostrud consectetur fugiat. Id pariatur proident consectetur ipsum commodo magna excepteur non. Magna adipisicing et dolore do cupidatat consectetur cupidatat anim aute voluptate enim. Lorem exercitation ut labore Lorem cupidatat ut eiusmod anim. Velit labore elit nisi labore ullamco velit sunt consequat ipsum est cillum dolore. Id ea ullamco mollit excepteur enim amet minim aliquip ut occaecat deserunt.",
      likesCount: 5,
    },
    {
      id: 3,
      user: {
        name: "Emmanuel",
        surname: "MACRON",
      },
      message:
        "Aute laborum ipsum ut proident nostrud cupidatat nostrud consectetur fugiat. Id pariatur proident consectetur ipsum commodo magna excepteur non. Magna adipisicing et dolore do cupidatat consectetur cupidatat anim aute voluptate enim. Lorem exercitation ut labore Lorem cupidatat ut eiusmod anim. Velit labore elit nisi labore ullamco velit sunt consequat ipsum est cillum dolore. Id ea ullamco mollit excepteur enim amet minim aliquip ut occaecat deserunt.",
      likesCount: 69,
    },
  ];
  const [tabValue, setTabValue] = useState(0);
  const tabs = [<ListTwist twists={twists} />, <ListTwist twists={twists} />];
  const handleTabChange = (value) => {
    console.log(value);
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
          Elhadi CHITER
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
