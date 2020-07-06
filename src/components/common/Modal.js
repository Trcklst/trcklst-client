import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

export const Modal = ({
  title,
  content,
  classes,
  leftLink,
  rightLink,
  open,
  setOpen,
  validate,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent className={classes}>{content}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="default">
          {leftLink}
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            validate();
            handleClose();
          }}
          color="secondary"
        >
          {rightLink}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
