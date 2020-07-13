import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
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
    <Card className={classes.root}>
      <CardContent className={classes.details}>
        <Typography variant="h6" className={classes.email}>
          E-mail : {user.email}
        </Typography>
        <Typography variant="h6" className={classes.role}>
          Role : {user.role === "ROLE_USER" ? "Utilisateur" : "Administrateur"}
        </Typography>
        <Typography variant="h6" className={classes.subscription}>
          Abonnement :{" "}
          {user.subscription !== null
            ? user.subscription === "PRO"
              ? "PRO"
              : "PREMIUM"
            : "Pas d'abonnement"}
        </Typography>
      </CardContent>
    </Card>
  );
};
