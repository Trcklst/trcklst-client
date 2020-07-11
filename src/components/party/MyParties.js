import React, { useContext, useEffect, useState } from "react";
import { Grid, makeStyles, IconButton } from "@material-ui/core";
import {
  Visibility as VisibilityIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import { Party } from "../../services/party";
import { SessionContext } from "../../context/session";
import { Modal } from "../common/Modal";
import { fail } from "../common/Toast";

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
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [party, setParty] = useState("");

  const handleClickDelete = (id) => {
    setOpen(true);
    setParty(id);
  };

  const deleteParty = async () => {
    const dataDelete = await Party.delete(party);

    if (dataDelete.status !== 204) fail("Error");

    let tempTab = [];
    data.map((value) => {
      return value._id !== party ? tempTab.push(value) : "";
    });

    setData(tempTab);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await Party.get();
      const jsonData = await data.json();

      if (data.status !== 200) throw jsonData;

      let tempOwnParty = [];
      jsonData.map((value) => {
        return value.owner.id === user.id ? tempOwnParty.push(value) : "";
      });

      setData(tempOwnParty);
    };
    fetchData();
  }, [user.id]);

  return (
    <section className={classes.root}>
      <div className={classes.mainBlock}>
        <p className={classes.mainTitle}>Party créée</p>
        {data.length > 0 ? (
          data.map((value, index) => {
            return (
              <Grid container className={classes.main} key={index}>
                <Grid item xs={12}>
                  <div className={classes.ownParty}>
                    <Grid container>
                      <Grid item xs={12} sm={5} className={classes.element}>
                        <h3 className={classes.title}>Nom</h3>
                        <p className={classes.subtitle}>{value.name}</p>
                      </Grid>
                      <Grid item xs={12} sm={4} className={classes.element}>
                        <h3 className={classes.title}>Utilisateurs</h3>
                        <p className={classes.subtitle}>
                          {value.members.length} utilisateurs
                        </p>
                      </Grid>
                      <Grid item xs={4} sm={1} className={classes.element}>
                        <IconButton
                          aria-label="edit"
                          onClick={() => console.log("rename")}
                        >
                          <EditIcon />
                        </IconButton>
                      </Grid>
                      <Grid item xs={4} sm={1} className={classes.element}>
                        <IconButton
                          aria-label="see"
                          onClick={() => push(`/party/${value._id}`)}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Grid>
                      <Grid item xs={4} sm={1} className={classes.element}>
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
    </section>
  );
};
