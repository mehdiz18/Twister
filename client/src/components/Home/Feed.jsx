import { Grid } from "@mui/material";
import useFeedTwists from "../../hooks/useFeedTwists";
import ListTwist from "./Twist/ListTwist";
import NewTwist from "./Twist/NewTist";
const Feed = ({ twists, addTwist, userId }) => {
  let twist = useFeedTwists(userId);
  twist = twists.concat(twist);
  return (
    <Grid>
      <NewTwist addTwist={addTwist} userId={userId} />
      <ListTwist twists={twist} userId={userId} />
    </Grid>
  );
};

export default Feed;
