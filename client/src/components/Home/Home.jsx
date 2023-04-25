import { Grid } from "@mui/material";
import SideBar from "./SideBar/SideBar";
import { useState } from "react";
import Welcome from "../welcome";
import Profile from "./Profile/Profile";
import Feed from "./Feed";

import axios from "axios";

const Home = ({ loggedState, logout, userId }) => {
  const [twists, setTwists] = useState([
    {
      id: 1,
      user: {
        firstName: "Mehdi",
        lastName: "ZENINE",
      },
      content:
        "Aute laborum ipsum ut proident nostrud cupidatat nostrud consectetur fugiat. Id pariatur proident consectetur ipsum commodo magna excepteur non. Magna adipisicing et dolore do cupidatat consectetur cupidatat anim aute voluptate enim. Lorem exercitation ut labore Lorem cupidatat ut eiusmod anim. Velit labore elit nisi labore ullamco velit sunt consequat ipsum est cillum dolore. Id ea ullamco mollit excepteur enim amet minim aliquip ut occaecat deserunt.",
      likes: 3,
    },
    {
      id: 1,
      user: {
        firstName: "Mehdi",
        lastName: "ZENINE",
      },
      content:
        "Aute laborum ipsum ut proident nostrud cupidatat nostrud consectetur fugiat. Id pariatur proident consectetur ipsum commodo magna excepteur non. Magna adipisicing et dolore do cupidatat consectetur cupidatat anim aute voluptate enim. Lorem exercitation ut labore Lorem cupidatat ut eiusmod anim. Velit labore elit nisi labore ullamco velit sunt consequat ipsum est cillum dolore. Id ea ullamco mollit excepteur enim amet minim aliquip ut occaecat deserunt.",
      likes: 3,
    },
    {
      id: 1,
      user: {
        firstName: "Mehdi",
        lastName: "ZENINE",
      },
      content:
        "Aute laborum ipsum ut proident nostrud cupidatat nostrud consectetur fugiat. Id pariatur proident consectetur ipsum commodo magna excepteur non. Magna adipisicing et dolore do cupidatat consectetur cupidatat anim aute voluptate enim. Lorem exercitation ut labore Lorem cupidatat ut eiusmod anim. Velit labore elit nisi labore ullamco velit sunt consequat ipsum est cillum dolore. Id ea ullamco mollit excepteur enim amet minim aliquip ut occaecat deserunt.",
      likes: 3,
    },
  ]);

  const [errMsg, setErrMsg] = useState("");

  const addTwist = async (content) => {
    if (content !== "") {
      try {
        let response = await axios.get(
          `http://127.0.0.1:5000/api/users/${userId.current}`
        );

        let newItem = {
          content: content,
          user: {
            firstName: response.data.firstName,
            lastName: response.data.lastName,
          },
          likes: 0,
        };
      
        setTwists([newItem, ...twists]);
        console.log(twists);
      } catch (err) {
        setErrMsg("Erreur Lors de connexion au serveur 0");
        console.log(err);
      }
    } else {
      setErrMsg("Message content should not be Void");
      console.log(errMsg);
    }
  };
  const [index, setIndex] = useState(0);
  const handleIndexChange = (index) => {
    setIndex(index);
  };

  const views = [
    <Feed twists={twists} addTwist={addTwist} userId={userId} />,
    <Profile userId={userId} />,
  ];

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
