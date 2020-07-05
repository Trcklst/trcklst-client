import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import { PARTYJOIN } from "../../../helpers/route-constant";
import joinIcon from "../../../images/dashboard/join-icon.png";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
  button: {
    position: "relative",
    height: "8rem",
    width: "100%",
    backgroundImage: "linear-gradient(to top right,#ff63ec,#ffe6fc)",
    borderRadius: 15,
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    paddingTop: ".75rem",
    paddingBottom: ".75rem",
    "&:hover": {
      backgroundImage: "linear-gradient(to top right,#ff5beb,#fdcff7)",
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
  },
});

export const JoinParty = () => {
  const classes = useStyles();

  return (
    <Link to={PARTYJOIN} className={classes.link}>
      <Button className={classes.button}>
        <div className={classes.divTitleSubtitle}>
          <h3 className={classes.title}>Rejoindre</h3>
          <p className={classes.subtitle}>une party</p>
        </div>
        <img
          className={classes.img}
          src={joinIcon}
          width="100"
          alt="logo-party"
        />
      </Button>
    </Link>
  );
};
