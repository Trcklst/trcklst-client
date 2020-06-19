import React, { useEffect, useState } from "react";
import { makeStyles, withStyles, Button, Grid } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { SupervisorAccount as SupervisorAccountIcon } from "@material-ui/icons";
import { useLocation } from "react-router-dom";

import { Party } from "../../../services/party";
import backgroundPlaylist from "../../../images/background-playlist.jpg";
import { Music } from "./Music";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1220,
    padding: 15,
    margin: "0 auto",
  },
  head: {
    display: "flex",
  },
  backgroundPlaylist: {
    border: "1px solid #000",
    width: 245,
    [theme.breakpoints.down("xs")]: {
      width: 200,
    },
  },
  mainTitle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingLeft: 25,
  },
  subtitle: {
    margin: 0,
    color: "#c3c3c3",
    fontSize: 14,
    fontWeight: "100",
    textTransform: "uppercase",
  },
  title: {
    fontSize: 40,
    margin: 0,
    padding: "2px 0 15px 0",
  },
  createdBy: {
    margin: 0,
    color: "#9c9c9c",
    paddingBottom: 20,
  },
  author: {
    color: "#252525",
  },
  buttonState: {
    width: 125,
    height: 35,
    borderRadius: 25,
  },
  headPlaylist: {
    color: "#c3c3c3",
    textTransform: "uppercase",
    fontSize: 14,
    borderBottom: "1px solid #f5f5f5",
  },
  people: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    color: "#40eadb",
  },
}));

export const PartyShow = () => {
  const classes = useStyles();
  const location = useLocation();
  const endpoint = parseInt(location.pathname.split("/").pop());
  const [data, setData] = useState([]);
  const [state, setState] = useState("Lire");

  const handleClick = () => {
    console.log("gestion de l'état de la musique");
    state === "Lire" ? setState("Pause") : setState("Lire");
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await Party.show(endpoint);
      const jsonData = await data.json();

      if (data.status !== 200) throw jsonData;

      setData(jsonData[0]);
    };
    fetchData();
  }, [endpoint]);

  return (
    <section className={classes.root}>
      <div className={classes.head}>
        <img
          src={backgroundPlaylist}
          alt="playlist"
          className={classes.backgroundPlaylist}
        />
        <div className={classes.mainTitle}>
          <h6 className={classes.subtitle}>Party</h6>
          <h3 className={classes.title}>{data.name}</h3>
          <p className={classes.createdBy}>
            Créée par <span className={classes.author}>Rémi</span> - 3 titres,
            11 min
          </p>
          <ColorButton
            variant="contained"
            color="primary"
            className={classes.buttonState}
            onClick={() => handleClick()}
          >
            {state}
          </ColorButton>
        </div>
      </div>
      <div className={classes.people}>
        <SupervisorAccountIcon />
        <p>6 personnes participes</p>
      </div>
      <>
        <Grid container className={classes.headPlaylist}>
          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
            <p>Titre</p>
          </Grid>
          <Grid item xs={3}>
            <p>Artiste</p>
          </Grid>
          <Grid item xs={3}>
            <p>Album</p>
          </Grid>
        </Grid>
        <Music title="Petite fille" artist="Booba" album="Trône" />
        <Music title="Petite fille" artist="Booba" album="Trône" />
        <Music title="Petite fille" artist="Booba" album="Trône" />
        <Music title="Petite fille" artist="Booba" album="Trône" />
      </>
    </section>
  );
};
