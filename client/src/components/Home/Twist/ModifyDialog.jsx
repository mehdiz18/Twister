import { Box, Button, Dialog, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";

const ModifyDialog = ({ message, open, handleClose, modifyCallback }) => {
  const [newMessage, setNewMessage] = useState(message.content);
  return (
    // <Dialog open={open} onClose={handleClose}>
    //   <DialogTitle>Modifier Twist</DialogTitle>
    //   <DialogContent>
    //     <DialogContentText>Azul fellak ar tmurt nnegh</DialogContentText>
    //   </DialogContent>
    // </Dialog>
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: { width: 0.3 },
      }}
    >
      <DialogTitle align="center">Modifier Twist</DialogTitle>
      <Box
        sx={{
          width: 0.8,
          margin: "auto",
          padding: "auto",
        }}
      >
        <TextField
          fullWidth
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        ></TextField>
        <Box sx={{ width: 0.5, margin: "auto" }}>
          <Button
            variant="contained"
            onClick={() => {
              modifyCallback(message._id, newMessage);
              handleClose();
            }}
          >
            Modifier
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ModifyDialog;
