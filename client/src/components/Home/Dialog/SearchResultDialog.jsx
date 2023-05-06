import { Dialog, DialogContent } from "@mui/material";
import Twist from "../Twist/Twist";
const SearchResultDialog = ({
  content,
  userId,
  openResultDialog,
  handleCloseDialog,
}) => {
  return (
    <Dialog
      open={openResultDialog}
      onClose={handleCloseDialog}
      fullWidth
      maxWidth="md"
    >
      <DialogContent>
        <Twist message={content} userId={userId}></Twist>
      </DialogContent>
    </Dialog>
  );
};

export default SearchResultDialog;
