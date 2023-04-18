import { Grid, Avatar, Input, Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useState } from "react";
const NewTwist = ({ addTwist }) => {
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
