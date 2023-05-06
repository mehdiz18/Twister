import { Grid } from "@mui/material";
import User from "./User";
import { useEffect, useState } from "react";
import axios from "axios";

const ListUsers = ({friends, userId}) => {
  const [allUsers, setAllusers] = useState([]);
  
  useEffect(()=>{
    (async () => {
        let response = await axios.get(
          "http://127.0.0.1:5000/api/users"
        );
        setAllusers(response.data);
        
      })();
  }, []);
  
  let f = friends.map(x => x._id);
  
  let users = allUsers.filter(x => f.indexOf(x._id) === -1);
 
  return (
    <Grid item container direction="row">
      {users.map((item) => {
        return <User userId = {userId} user={item} key={item._id}></User>;
      })}
    </Grid>
  );
};

export default ListUsers;
