import { Grid } from "@mui/material";
import Friend from "./Friend";
// import empty from "../../../img/empty-folder.png";
const ListFriends = ({userId, friends }) => {
  //console.log(friends);
  return (
    <Grid item container direction="column">
      {friends.map((item) => {
        return <Friend userId = {userId} friend={item} key={item._id}></Friend>;
      })}
    </Grid>
  );
};

export default ListFriends;
