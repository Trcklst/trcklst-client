import React, { useContext, useEffect, useState } from "react";
import {
  makeStyles,
  IconButton,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
} from "@material-ui/core";
import {
  Visibility as VisibilityIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import moment from "moment";

import { Party } from "../../services/party";
import { SessionContext } from "../../context/session";
import { Modal } from "../common/Modal";
import { success, fail } from "../common/Toast";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
  },
  mainBlock: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  mainTitle: {
    color: "#263238",
    fontSize: 24,
    fontWeight: 500,
    lineHeight: "28px",
    letterSpacing: "-0.06px",
    marginTop: 0,
  },
  mainSubtitle: {
    color: "#546e7a",
    fontSize: 11,
    fontWeight: 500,
    lineHeight: "13px",
    letterSpacing: "0.33px",
    textTransform: "uppercase",
    marginTop: 0,
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
  rootCard: {
    display: "flex",
    maxWidth: 750,
    width: "100%",
    height: 180,
    marginBottom: 20,
  },
  detailsCard: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  contentCard: {
    flex: "1 0 auto",
  },
  coverCard: {
    width: 250,
  },
  controlsCard: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIconCard: {
    height: 38,
    width: 38,
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

  const handleClickEdit = (value) => {
    push({
      pathname: `party/${value._id}/edit`,
      state: { idParty: value._id, name: value.name },
    });
  };

  const deleteParty = async () => {
    try {
      const dataDelete = await Party.delete(party);

      if (dataDelete.status !== 204) throw dataDelete;

      let tempTab = [];
      data.map((value) => {
        return value._id !== party ? tempTab.push(value) : "";
      });

      setData(tempTab);

      success("La party a été supprimée");
    } catch (err) {
      fail("Error");
    }
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
        <div>
          <h2 className={classes.mainSubtitle}>Party</h2>
          <h1 className={classes.mainTitle}>Mes party créées</h1>
        </div>
        <Grid container spacing={3}>
          {data.length > 0 ? (
            data.map((value, index) => {
              return (
                <Grid item xs={12} sm={6} key={index}>
                  <Card className={classes.rootCard}>
                    <div className={classes.detailsCard}>
                      <CardContent className={classes.contentCard}>
                        <Typography component="h5" variant="h5">
                          {value.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          Créé le{" "}
                          {moment(value.createdAt).format("DD/MM/YYYY HH:mm")}
                        </Typography>
                      </CardContent>
                      <div className={classes.controlsCard}>
                        <IconButton
                          aria-label="edit"
                          onClick={() => handleClickEdit(value)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          aria-label="see"
                          onClick={() => push(`/party/${value._id}`)}
                        >
                          <VisibilityIcon className={classes.playIconCard} />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          onClick={() => handleClickDelete(value._id)}
                        >
                          <DeleteIcon />
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
                      </div>
                    </div>
                    <CardMedia
                      className={classes.coverCard}
                      image="https://img2.goodfon.com/wallpaper/nbig/8/91/party-smoke-electronica.jpg"
                      title="Wallpaper party"
                    />
                  </Card>
                </Grid>
              );
            })
          ) : (
            <p className={classes.noData}>
              Vous n'êtes propriétaire d'aucune party pour le moment ...
            </p>
          )}
        </Grid>
      </div>
    </section>
  );
};
