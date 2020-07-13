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

import myPartiesPicture from "../../../images/dashboard/my-parties.svg";
import { MYPARTIES } from "../../../helpers/route-constant";

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

export const CardMyParties = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={myPartiesPicture}
          title="Subscriptions Picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Mes party
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Accéder à la liste de mes party.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={MYPARTIES} className={classes.link}>
          <Button size="small" color="primary">
            Afficher la liste
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
