import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import { CardUsers } from "./CardUsers";
import { ViewProfile } from "./ViewProfile";

const useStyles = makeStyles({
  root: {
    maxWidth: 1220,
    padding: 20,
  },
  cards: {
    marginTop: 30,
  },
});

export const DashboardAdmin = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <ViewProfile />
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.cards}>
        <Grid item xs={12} md={4}>
          <CardUsers />
        </Grid>
      </Grid>
    </section>
  );
};
