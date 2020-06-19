import React, { useContext, useEffect, useState } from "react";
import { Grid, makeStyles, IconButton } from "@material-ui/core";
import { Visibility as VisibilityIcon } from "@material-ui/icons";

import { Party } from "../../services/party";
import { SessionContext } from "../../context/session";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1220,
    padding: 15,
    margin: "0 auto",
  },
  mainBlock: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  mainTitle: {
    fontSize: 25,
    textTransform: "uppercase",
  },
  main: {
    marginTop: 10,
    marginBottom: 10,
  },
  ownParty: {
    backgroundColor: "#ffdb80",
  },
  externalParty: {
    backgroundColor: "#78e878",
  },
  element: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 25,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      alignItems: "center",
    },
  },
  endElement: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingRight: 25,
    [theme.breakpoints.down("xs")]: {
      paddingRight: 0,
      alignItems: "center",
    },
  },
  title: {
    fontSize: 12,
    marginBottom: 0,
  },
  subtitle: {
    marginTop: 0,
  },
  noData: {
    color: "#c5c5c5",
    fontStyle: "italic",
    letterSpacing: "1px",
    fontSize: 12,
  },
}));

export const MyParties = () => {
  const classes = useStyles();
  const { user } = useContext(SessionContext);
  const [OwnParty, setOwnParty] = useState([]);
  const [ExternalParty, setExternalParty] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataOwnParty = await Party.mine(user.id);
      const jsonDataOwnParty = await dataOwnParty.json();

      const dataExternalParty = await Party.external(user.id);
      const jsonExternalParty = await dataExternalParty.json();

      if (dataOwnParty.status !== 200) throw jsonDataOwnParty;

      setOwnParty(jsonDataOwnParty);

      if (dataExternalParty.status !== 200) throw jsonExternalParty;

      setExternalParty(jsonExternalParty);
    };
    fetchData();
  }, [user.id]);

  return (
    <section className={classes.root}>
      <div className={classes.mainBlock}>
        <p className={classes.mainTitle}>Party créée</p>
        {OwnParty.length > 0 ? (
          OwnParty.map((value, index) => {
            return (
              <Grid container className={classes.main} key={index}>
                <Grid item xs={12}>
                  <div className={classes.ownParty}>
                    <Grid container>
                      <Grid item xs={12} sm={5} className={classes.element}>
                        <h3 className={classes.title}>Nom</h3>
                        <p className={classes.subtitle}>{value.name}</p>
                      </Grid>
                      <Grid item xs={12} sm={3} className={classes.element}>
                        <h3 className={classes.title}>Utilisateurs</h3>
                        <p className={classes.subtitle}>65 utilisateurs</p>
                      </Grid>
                      <Grid item xs={12} sm={3} className={classes.element}>
                        <h3 className={classes.title}>Date</h3>
                        <p className={classes.subtitle}>23/08/1996 12:12</p>
                      </Grid>
                      <Grid item xs={12} sm={1} className={classes.endElement}>
                        <IconButton
                          aria-label="see"
                          className={classes.margin}
                          onClick={() => console.log(value.id)}
                        >
                          <VisibilityIcon fontSize="large" />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            );
          })
        ) : (
          <p className={classes.noData}>
            Vous n'êtes propriétaire d'aucune party pour le moment ...
          </p>
        )}
      </div>
      <div className={classes.mainBlock}>
        <p className={classes.mainTitle}>Party rejoint</p>
        {ExternalParty.length > 0 ? (
          ExternalParty.map((value, index) => {
            return (
              <Grid container className={classes.main} key={index}>
                <Grid item xs={12}>
                  <div className={classes.externalParty}>
                    <Grid container>
                      <Grid item xs={12} sm={5} className={classes.element}>
                        <h3 className={classes.title}>Nom</h3>
                        <p className={classes.subtitle}>{value.name}</p>
                      </Grid>
                      <Grid item xs={12} sm={3} className={classes.element}>
                        <h3 className={classes.title}>Utilisateurs</h3>
                        <p className={classes.subtitle}>65 utilisateurs</p>
                      </Grid>
                      <Grid item xs={12} sm={3} className={classes.element}>
                        <h3 className={classes.title}>Date</h3>
                        <p className={classes.subtitle}>23/08/1996 12:12</p>
                      </Grid>
                      <Grid item xs={12} sm={1} className={classes.endElement}>
                        <IconButton
                          aria-label="see"
                          className={classes.margin}
                          onClick={() => console.log(value.idParty)}
                        >
                          <VisibilityIcon fontSize="large" />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            );
          })
        ) : (
          <p className={classes.noData}>
            Vous n'avez rejoint aucune party pour le moment ...
          </p>
        )}
      </div>
    </section>
  );
};
