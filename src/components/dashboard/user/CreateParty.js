import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import { PARTYNEW } from "../../../helpers/route-constant";
import musicIcon from "../../../images/dashboard/music-icon.png";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
  button: {
    position: "relative",
    height: "8rem",
    width: "100%",
    backgroundImage: "linear-gradient(to top right,#ff512f,#ff7eb7)",
    borderRadius: 15,
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    paddingTop: ".75rem",
    paddingBottom: ".75rem",
    "&:hover": {
      backgroundImage: "linear-gradient(to top right,#ea3e1c,#f561a2)",
    },
  },
  divTitleSubtitle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
  title: {
    letterSpacing: ".025em",
    textTransform: "uppercase",
    fontSize: "1.5rem",
    color: "#FFF",
    margin: 0,
  },
  subtitle: {
    color: "#FFF",
    margin: 0,
  },
  img: {
    position: "absolute",
    bottom: 0,
    right: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
}));

export const CreateParty = () => {
  const classes = useStyles();

  return (
    <Link to={PARTYNEW} className={classes.link}>
      <Button className={classes.button}>
        <div className={classes.divTitleSubtitle}>
          <h3 className={classes.title}>Créer</h3>
          <p className={classes.subtitle}>une party</p>
        </div>
        <img
          className={classes.img}
          src={musicIcon}
          width="100"
          alt="logo-party"
        />
      </Button>
    </Link>
  );
};
