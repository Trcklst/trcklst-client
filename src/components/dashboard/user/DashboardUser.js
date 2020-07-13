import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import { CreateParty } from "./CreateParty";
import { JoinParty } from "./JoinParty";
import { ViewProfile } from "./ViewProfile";
import { CardMySubscriptions } from "./CardMySubscriptions";
import { CardMyParties } from "./CardMyParties";

const useStyles = makeStyles({
  root: {
    maxWidth: 1220,
    padding: 20,
  },
  cards: {
    marginTop: 30,
  },
});

export const DashboardUser = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <CreateParty />
        </Grid>
        <Grid item xs={12} sm={3}>
          <JoinParty />
        </Grid>
        <Grid item xs={12} sm={3}>
          <ViewProfile />
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.cards}>
        <Grid item xs={12} md={4}>
          <CardMyParties />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardMySubscriptions />
        </Grid>
      </Grid>
    </section>
  );
};
