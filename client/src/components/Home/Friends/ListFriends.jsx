import { Grid } from "@mui/material";
import Friend from "./Friend";
// import empty from "../../../img/empty-folder.png";
const ListFriends = ({ friends }) => {
  console.log(friends);
  return (
    <Grid item container direction="column">
      {friends.map((item) => {
        return <Friend friend={item} key={item._id}></Friend>;
      })}
    </Grid>
  );
};

export default ListFriends;
