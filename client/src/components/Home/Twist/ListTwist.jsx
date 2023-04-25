import { Grid } from "@mui/material";
import Twist from "./Twist";
// import empty from "../../../img/empty-folder.png";
const ListTwist = ({ twists }) => {
  return (
    <Grid item container direction="column">
      {twists.map((item) => {
        return <Twist message={item} key={item._id} userId={userId}></Twist>;
      })}
    </Grid>
  );
};

export default ListTwist;
