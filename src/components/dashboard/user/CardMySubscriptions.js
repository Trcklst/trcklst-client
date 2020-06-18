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

import subscriptionsPicture from "../../../images/dashboard/subscriptions.svg";
import { MYSUBSRIPTIONS } from "../../../helpers/route-constant";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    backgroundPosition: "top",
  },
  link: {
    textDecoration: "none",
  },
});

export const CardMySubscriptions = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={subscriptionsPicture}
          title="Subscriptions Picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Mes abonnements
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Accéder à la liste de mes abonnements de l'application Trcklst.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={MYSUBSRIPTIONS} className={classes.link}>
          <Button size="small" color="primary">
            Afficher la liste
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
