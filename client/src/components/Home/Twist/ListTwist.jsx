import { Grid } from "@mui/material";
import Twist from "./Twist";
const ListTwist = ({ twists }) => {
  return (
    <Grid container>
      {twists.map((item) => {
        return <Twist message={item} key={item.id}></Twist>;
      })}
    </Grid>
  );
};

export default ListTwist;
