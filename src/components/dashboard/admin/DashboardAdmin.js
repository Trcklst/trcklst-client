import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import { CardUsers } from "./CardUsers";
import { CardSubscriptions } from "./CardSubscriptions";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 1220,
    padding: 15,
    margin: "0 auto",
  },
});

export const DashboardAdmin = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <CardUsers />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardSubscriptions />
        </Grid>
      </Grid>
    </section>
  );
};
