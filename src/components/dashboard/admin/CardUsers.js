import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import usersPicture from "../../../images/dashboard/users.svg";
import { USERS } from "../../../helpers/route-constant";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  link: {
    textDecoration: "none",
  },
});

export const CardUsers = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={usersPicture}
          title="Users Picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Utilisateurs
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Accéder à la liste des utilisateurs utilisant l'application Trcklst.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={USERS} className={classes.link}>
          <Button size="small" color="primary">
            Afficher la liste
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
