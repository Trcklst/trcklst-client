import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
});

export const ButtonLoader = ({ children, loading }) => {
  const classes = useStyles();

  return (
    <section className={classes.wrapper}>
      {children}
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </section>
  );
};
