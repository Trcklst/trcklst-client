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

import invoicesPicture from "../../../images/dashboard/invoices.svg";
import { MYINVOICES } from "../../../helpers/route-constant";

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

export const CardMyInvoices = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={invoicesPicture}
          title="Invoices Picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Mes factures
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Accéder à la liste de mes factures de l'application Trcklst.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={MYINVOICES} className={classes.link}>
          <Button size="small" color="primary">
            Afficher la liste
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
