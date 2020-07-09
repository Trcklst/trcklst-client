import React, { useContext, useEffect, useState } from "react";
import { Grid, makeStyles, IconButton } from "@material-ui/core";
import {
  Visibility as VisibilityIcon,
  Delete as DeleteIcon,
  ExitToApp as ExitToAppIcon,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import { Party } from "../../services/party";
import { SessionContext } from "../../context/session";
import { Modal } from "../common/Modal";
import { success, fail } from "../common/Toast";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1220,
    margin: "0 auto",
    width: "100%",
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
  const { push } = useHistory();
  const { user } = useContext(SessionContext);
  const [OwnParty, setOwnParty] = useState([]);
  const [ExternalParty, setExternalParty] = useState([]);
  const [open, setOpen] = useState(false);
  const [party, setParty] = useState("");

  const handleClickLeave = (id) => {
    setOpen(true);
    setParty(id);
  };

  const leaveParty = async () => {
    const data = await Party.leave(party);

    if (data.status !== 200) fail("Error");

    let tempTab = [];
    ExternalParty.map((value) => {
      return value._id !== party ? tempTab.push(value) : "";
    });

    setExternalParty(tempTab);
    success("Vous avez quitté la party");
  };

  const handleClickDelete = (id) => {
    setOpen(true);
    setParty(id);
  };

  const deleteParty = async () => {
    const data = await Party.delete(party);

    if (data.status !== 204) fail("Error");

    let tempTab = [];
    OwnParty.map((value) => {
      return value._id !== party ? tempTab.push(value) : "";
    });

    setOwnParty(tempTab);
    success("La party a été supprimé");
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await Party.get();
      const jsonData = await data.json();
      const tempOwnParty = [];
      const tempExternalParty = [];

      if (data.status !== 200) throw jsonData;

      jsonData.map((value) => {
        return value.owner.id === user.id
          ? tempOwnParty.push(value)
          : tempExternalParty.push(value);
      });

      setOwnParty(tempOwnParty);
      setExternalParty(tempExternalParty);
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
                      <Grid item xs={12} sm={6} className={classes.element}>
                        <h3 className={classes.title}>Nom</h3>
                        <p className={classes.subtitle}>{value.name}</p>
                      </Grid>
                      <Grid item xs={12} sm={4} className={classes.element}>
                        <h3 className={classes.title}>Utilisateurs</h3>
                        <p className={classes.subtitle}>
                          {value.members.length} utilisateurs
                        </p>
                      </Grid>
                      <Grid item xs={12} sm={1} className={classes.element}>
                        <IconButton
                          aria-label="see"
                          onClick={() => push(`/party/${value._id}`)}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Grid>
                      <Grid item xs={12} sm={1} className={classes.endElement}>
                        <IconButton aria-label="delete">
                          <DeleteIcon
                            onClick={() => handleClickDelete(value._id)}
                          />
                        </IconButton>
                        <Modal
                          title={"Supprimer une party"}
                          content={
                            "Êtes-vous sûr de vouloir supprimer votre party ?"
                          }
                          leftLink={"Annuler"}
                          rightLink={"Supprimer"}
                          setOpen={setOpen}
                          open={open}
                          validate={deleteParty}
                        />
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
                      <Grid item xs={12} sm={6} className={classes.element}>
                        <h3 className={classes.title}>Nom</h3>
                        <p className={classes.subtitle}>{value.name}</p>
                      </Grid>
                      <Grid item xs={12} sm={4} className={classes.element}>
                        <h3 className={classes.title}>Utilisateurs</h3>
                        <p className={classes.subtitle}>
                          {value.members.length} utilisateurs
                        </p>
                      </Grid>
                      <Grid item xs={12} sm={1} className={classes.element}>
                        <IconButton
                          aria-label="see"
                          onClick={() => push(`/party/${value._id}`)}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Grid>
                      <Grid item xs={12} sm={1} className={classes.endElement}>
                        <IconButton aria-label="leave">
                          <ExitToAppIcon
                            onClick={() => handleClickLeave(value._id)}
                          />
                        </IconButton>
                        <Modal
                          title={"Quitter une party"}
                          content={
                            "Êtes-vous sûr de vouloir quitter cette party ?"
                          }
                          leftLink={"Annuler"}
                          rightLink={"Quitter"}
                          setOpen={setOpen}
                          open={open}
                          validate={leaveParty}
                        />
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
