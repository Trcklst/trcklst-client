import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contentPlaylist: {
    fontWeight: 600,
    letterSpacing: "1px",
    fontSize: 14,
    borderBottom: "1px solid #f5f5f5",
  },
}));

export const Music = ({ title, artist, album }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.contentPlaylist}>
      <Grid item xs={2} style={{ textAlign: "center" }}>
        <p>icon</p>
      </Grid>
      <Grid item xs={4}>
        <p>{title}</p>
      </Grid>
      <Grid item xs={3}>
        <p>{artist}</p>
      </Grid>
      <Grid item xs={3}>
        <p>{album}</p>
      </Grid>
    </Grid>
  );
};
