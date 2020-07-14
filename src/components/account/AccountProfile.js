import React from "react";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Grid,
  CardHeader,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import email from "../../images/account/e-mail.svg";
import subscription from "../../images/account/subscription.svg";
import right from "../../images/account/right.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    flexGrow: 1,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: theme.spacing(11),
    height: theme.spacing(11),
  },
  identifier: {
    color: "#263238",
    fontSize: 24,
    fontWeight: 500,
    lineHeight: "28px",
    letterSpacing: -0.06,
    margin: "15px 0 8px 0",
  },
  email: {
    color: "#546e7a",
    fontSize: 20,
    fontWeight: 400,
    lineHeight: "21px",
    letterSpacing: -0.05,
    padding: 15,
  },
  cardActions: {
    width: "85%",
    "& > button": {
      flexGrow: 1,
    },
  },
  media: {
    height: 265,
  },
  role: {
    color: "#546e7a",
    fontSize: 20,
    fontWeight: 400,
    lineHeight: "21px",
    letterSpacing: -0.05,
    padding: 15,
  },
  subscription: {
    color: "#546e7a",
    fontSize: 20,
    fontWeight: 400,
    lineHeight: "21px",
    letterSpacing: -0.05,
    padding: 15,
  },
  title: {
    color: "#546e7a",
    fontSize: 20,
    fontWeight: 500,
    lineHeight: "13px",
    letterSpacing: 0.33,
    textTransform: "uppercase",
    marginBottom: 35,
  },
  image: {
    maxWidth: 200,
    width: "100%",
    marginBottom: 15,
    height: "100%",
    minHeight: 180,
  },
  head: {
    display: "flex",
  },
}));

export const AccountProfile = ({ user }) => {
  const classes = useStyles();

  const isEmpty = (obj) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  return isEmpty(user) ? (
    <Skeleton variant="rect" className={classes.media} />
  ) : (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} className={classes.head}>
        <Card className={classes.root}>
          <CardHeader title="E-mail" />
          <CardContent className={classes.details}>
            <img className={classes.image} src={email} alt="e-mail" />
            <Typography variant="h6" className={classes.email}>
              {user.email}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4} className={classes.head}>
        <Card className={classes.root}>
          <CardHeader title="Rôle" />
          <CardContent className={classes.details}>
            <img className={classes.image} src={right} alt="right" />
            <Typography variant="h6" className={classes.role}>
              {user.role === "ROLE_USER" ? "Utilisateur" : "Administrateur"}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4} className={classes.head}>
        <Card className={classes.root}>
          <CardHeader title="Abonnement" />
          <CardContent className={classes.details}>
            <img
              className={classes.image}
              src={subscription}
              alt="subscription"
            />
            <Typography variant="h6" className={classes.subscription}>
              {user.subscription !== null
                ? user.subscription === "PRO"
                  ? "PRO"
                  : "PREMIUM"
                : "Pas d'abonnement"}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
