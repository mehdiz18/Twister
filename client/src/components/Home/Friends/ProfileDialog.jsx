import { Box, DialogTitle, Dialog, DialogContent} from "@mui/material";
// import { useState } from "react";
import Profile from "../Profile/Profile";

const ProfileDialog = ({ friendId, open, handleClose}) => {
  console.log("je suis dans ProfilDialog");
  console.log(friendId);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: { width: 0.3 },
      }}
    >
      <DialogTitle align="center">Modifier Twist</DialogTitle>

      <DialogContent>
        <Profile userId = {friendId}>
            
        </Profile>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;
