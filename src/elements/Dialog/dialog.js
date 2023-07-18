import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DialogBox = ({
  open,
  title,
  content,
  action,
  onClose,
  closeIcon,
  cancelButtonTitle,
  ...other
}) => {
  return (
    <Dialog open={open} {...other}>
      <DialogTitle>
        {title}
        {closeIcon && (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent dividers>
        {content && <DialogContentText>{content}</DialogContentText>}
      </DialogContent>
      <DialogActions>
        <Button variant={"outlined"} onClick={onClose}>
          {cancelButtonTitle}
        </Button>
        {action}
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
