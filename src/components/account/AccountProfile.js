import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
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
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "21px",
    letterSpacing: -0.05,
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
        <Avatar alt="Profile" src="/" className={classes.avatar}>
          N
        </Avatar>
        <Typography variant="h5" className={classes.identifier}>
          N
        </Typography>
        <Typography variant="h6" className={classes.email}>
          {user.email}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button variant="text">Supprimer la photo</Button>
      </CardActions>
    </Card>
  );
};
