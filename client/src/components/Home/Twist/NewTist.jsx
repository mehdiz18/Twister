import { Grid, Avatar, Input, Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useState } from "react";

const handleSubmit = async(event) =>{
  // event.preventDefault();

  // try {
  //   let response = await axios.post(
  //     "http://127.0.0.1:5000/api/users", 
  //     {content : content, userId : userId});
  //   console.log(response.data);
  //   setSuccess(!success);
  //   // clear input fields
  // } catch (err) {
  // }

}

const NewTwist = ({ addTwist, userId }) => {
  const [content, setContent] = useState("");
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
          }}
        >
          Twister
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewTwist;
