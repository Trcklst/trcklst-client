import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import { CreateParty } from "./CreateParty";
import { ViewProfile } from "./ViewProfile";
import { CardMySubscriptions } from "./CardMySubscriptions";
import { CardMyInvoices } from "./CardMyInvoices";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 1220,
    padding: 15,
    margin: "0 auto",
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
          <ViewProfile />
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.cards}>
        <Grid item xs={12} md={4}>
          <CardMySubscriptions />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardMyInvoices />
        </Grid>
      </Grid>
    </section>
  );
};
