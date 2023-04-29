import { Grid } from "@mui/material";
import User from "./User";
import { useEffect, useState } from "react";
import axios from "axios";

// import empty from "../../../img/empty-folder.png";
const ListUsers = ({friends, userId}) => {
  const [allUsers, setAllusers] = useState([]);
  //const [users, setUsers] = useState([]);

  useEffect(()=>{
    (async () => {
        let response = await axios.get(
          "http://127.0.0.1:5000/api/users"
        );
        setAllusers(response.data);
        //setUsers(allUsers-friends);
      })();
  }, []);
  
  let users = allUsers.filter(x => ! friends.includes(x));

  //console.log(users);
  return (
    <Grid item container direction="row">
      {users.map((item) => {
        return <User userId = {userId} user={item} key={item._id}></User>;
      })}
    </Grid>
  );
};

export default ListUsers;
