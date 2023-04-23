import { Grid } from "@mui/material";
import SideBar from "./SideBar/SideBar";
import { useState } from "react";
import Welcome from "../welcome";
import Profile from "./Profile/Profile";
import Feed from "./Feed";
const Home = ({ loggedState, logout }) => {
  const [twists, setTwists] = useState([
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
  ]);
  const addTwist = (content) => {
    let newItem = {
      id: Math.floor(Math.random() * 1000) + 1,
      message: content,
      user: {
        name: "Hadi",
        surname: "CHITER",
      },
      likesCount: 0,
    };
    setTwists([newItem, ...twists]);
  };
  const [index, setIndex] = useState(0);
  const handleIndexChange = (index) => {
    setIndex(index);
  };

  const views = [<Feed twists={twists} addTwist={addTwist} />, <Profile />];

  return loggedState ? (
    <Grid
      container
      direction="column"
      width={0.65}
      justifyContent="space-between"
    >
      <Grid item container>
        <SideBar disconnect={logout} changeView={handleIndexChange}></SideBar>
      </Grid>
      <Grid item>{views[index]}</Grid>
    </Grid>
  ) : (
    <Welcome></Welcome>
  );
};

export default Home;
