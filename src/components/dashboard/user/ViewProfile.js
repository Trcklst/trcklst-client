import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import { ACCOUNTUSER } from "../../../helpers/route-constant";
import profileIcon from "../../../images/dashboard/profile-icon.png";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
  button: {
    position: "relative",
    height: "8rem",
    width: "100%",
    backgroundImage: "linear-gradient(to top right,#e6e6e6,#f1f1f1)",
    borderRadius: 15,
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    paddingTop: ".75rem",
    paddingBottom: ".75rem",
    "&:hover": {
      backgroundImage: "linear-gradient(to top right,#e6e6e6,#e8e8e8)",
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
    color: "#000",
    margin: 0,
  },
  subtitle: {
    color: "#000",
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

export const ViewProfile = () => {
  const classes = useStyles();

  return (
    <Link to={ACCOUNTUSER} className={classes.link}>
      <Button className={classes.button}>
        <div className={classes.divTitleSubtitle}>
          <h3 className={classes.title}>Visionner</h3>
          <p className={classes.subtitle}>mon profil</p>
        </div>
        <img
          className={classes.img}
          src={profileIcon}
          width="100"
          alt="logo-party"
        />
      </Button>
    </Link>
  );
};
