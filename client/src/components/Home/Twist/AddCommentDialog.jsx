import { Box, Button, Dialog, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";

const AddComment = ({ message, open, handleClose, addCallBack }) => {
  const [newComment, setNewComment] = useState("");
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: { width: 0.3 },
      }}
    >
      <DialogTitle align="center">Ajouter un commentaire</DialogTitle>
      <Box
        sx={{
          width: 0.8,
          margin: "auto",
          padding: "auto",
        }}
      >
        <TextField
          fullWidth
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></TextField>
        <Box sx={{ width: 0.5, margin: "auto" }}>
          <Button
            variant="contained"
            onClick={() => {
              addCallBack(message._id, newComment);
              handleClose();
              setNewComment("");
            }}
          >
            Commenter
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default AddComment;
