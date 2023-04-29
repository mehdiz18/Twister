import { DialogTitle, Dialog, DialogContent } from "@mui/material";
// import { useState } from "react";
import Profile from "../Profile/Profile";

const ProfileDialog = ({ visitorId, friendId, open, handleClose }) => {
  
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      //maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: { width: 0.3 },
      }}
    >
      <DialogTitle align="center">Visite Profil</DialogTitle>

      <DialogContent>
        <Profile userId={friendId} visitorId={visitorId}></Profile>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;
