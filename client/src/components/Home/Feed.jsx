import { Grid } from "@mui/material";
import useFeedTwists from "../../hooks/useFeedTwists";
import ListTwist from "./Twist/ListTwist";
import NewTwist from "./Twist/NewTist";
const Feed = ({ userId }) => {
  let [twist, addTwist] = useFeedTwists(userId);
  return (
    <Grid>
      <NewTwist addTwist={addTwist} userId={userId} />
      <ListTwist twists={twist} userId={userId} />
    </Grid>
  );
};

export default Feed;
