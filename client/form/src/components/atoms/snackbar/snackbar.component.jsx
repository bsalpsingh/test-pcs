import React, { useEffect, useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import useStyles from "./snackbar.styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const SnackBar = ({ openState, onClose, message, severity }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);

    onClose();
    console.log("Closing snackbar", open);
  };

  // useEffect(() => {
  //   setOpen(openState);
  // }, [openState]);
  useEffect(() => {
    setOpen(openState);
  }, [openState]);
  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};
