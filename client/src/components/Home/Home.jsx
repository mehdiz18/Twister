import { Grid } from "@mui/material";
import SideBar from "./SideBar/SideBar";
import { useState } from "react";
import Welcome from "../Welcome/welcome";
import Profile from "./Profile/Profile";
import Feed from "./Feed/Feed";

const Home = ({ loggedState, logout, userId }) => {
  const [index, setIndex] = useState(0);
  const handleIndexChange = (index) => {
    setIndex(index);
  };

  const views = [
    <Feed userId={userId} />,
    <Profile userId={userId} visitorId={userId} />,
  ];

  return loggedState ? (
    <Grid
      container
      direction="column"
      width={0.65}
      justifyContent="space-between"
    >
      <Grid item container>
        <SideBar
          disconnect={logout}
          changeView={handleIndexChange}
          userId={userId}
        ></SideBar>
      </Grid>
      <Grid item>{views[index]}</Grid>
    </Grid>
  ) : (
    <Welcome></Welcome>
  );
};

export default Home;
