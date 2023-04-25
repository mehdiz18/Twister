import { Grid } from "@mui/material";
import Twist from "./Twist";
// import empty from "../../../img/empty-folder.png";
const ListTwist = ({ twists, userId }) => {
  
  return (
    <Grid item container direction="column">
      {twists.map((item) => {
        return <Twist message={item} userId = {userId} key={item._id} ></Twist>;
      })}
    </Grid>
  );
};

export default ListTwist;
