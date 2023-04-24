import { Grid, Avatar, Input, Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useState } from "react";

import axios from "axios";



const NewTwist = ({ addTwist, userId }) => {
  
    const [content, setContent] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const handleSubmit = async(event) =>{
      event.preventDefault();
      if (content !== "") {
        try {
          let response = await axios.post(
            "http://127.0.0.1:5000/api/messages", 
            {content : content, userId : userId.current});
          console.log(response.data);
  
          } catch (err) {
            setErrMsg("Erreur lors de la connexion au serevreur");
            console.log(err);
          }
        }
      else {
        setErrMsg("Message content should not be Void");
        console.log(errMsg);
      }
    }
    return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderBottom: "6px solid",
        borderBottomColor: "divider",
        maxHeight: "20%",
      }}
     >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        width={1}
        p={2}
      >
        <Avatar alt="userAvatar" sx={{ bgcolor: deepOrange[500] }}>
          HC
        </Avatar>
        <Input
          type="text"
          placeholder="Azul"
          disableUnderline
          sx={{ width: "90%" }}
          maxRows={2}
          multiline
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </Grid>
      <Grid item alignSelf="flex-end">
        <Button
          type="submit"
          variant="contained"
          size="medium"
          onClick={(e) => {
            addTwist(content);
            setContent("");
            handleSubmit(e);
          }}
        >
          Twister
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewTwist;
