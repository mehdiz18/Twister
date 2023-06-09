import { Box, Dialog, DialogTitle } from "@mui/material";
import ListTwist from "../Twist/ListTwist";

const ListComments = ({ userId, comments, open, handleClose }) => {
  return (
    <Dialog
      open={open}
      maxWidth="lg"
      onClose={handleClose}
      PaperProps={{
        sx: { width: 1 },
      }}
    >
      <DialogTitle align="center">Les commentaires</DialogTitle>
      <Box
        sx={{
          width: 0.8,
          margin: "auto",
          padding: "auto",
        }}
      >
        <ListTwist twists={comments} userId={userId} />
      </Box>
    </Dialog>
  );
};

export default ListComments;
