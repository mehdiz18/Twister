import { Grid } from "@mui/material";
import useFeedTwists from "../../../hooks/useFeedTwists";
import ListTwist from "../Twist/ListTwist";
import NewTwist from "../Twist/NewTist";
import { useState } from "react";
import NavBarFeed from "./NavBarFeed";

const Feed = ({ userId }) => {
  let [twist, addTwist] = useFeedTwists(userId);

  const [tabValue, setTabValue] = useState(0);
  const tabs = [
    <Grid>
      <NewTwist addTwist={addTwist} userId={userId} />
      <ListTwist twists={twist} userId={userId} />
    </Grid>,
    <></>,
  ];
  const handleTabChange = (value) => {
    setTabValue(value);
  };

  return (
    <Grid item container width={1}>
        <Grid item width={1}>
          <NavBarFeed handleChange={handleTabChange}></NavBarFeed>
        </Grid>
        {tabs[tabValue]}
      </Grid>
  );
};

export default Feed;
