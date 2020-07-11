import React, { useState, useEffect, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Formik } from "formik";
import { Grid } from "@material-ui/core";

import { useStyles } from "./useStyles";
import { initialValues, TrackForm } from "./TrackForm";
import { trackSchema } from "./trackSchema";
import { SessionContext } from "../../../context/session";
import { isEmpty } from "../../../helpers/utility";
import { Track } from "../../../services/track";
import { CardMusic } from "../CardMusic";
import { Party } from "../../../services/party";
import { PARTYJOIN } from "../../../helpers/route-constant";
import { warning } from "../../common/Toast";

export const TrackNew = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const endpoint = location.pathname.split("/");
  const idParty = props.location.state
    ? props.location.state.idParty
    : endpoint[endpoint.length - 3];
  const { push } = useHistory();
  const { socket } = useContext(SessionContext);

  const [data, setData] = useState({});

  const handleSubmit = async ({ title }) => {
    const data = await Track.search(title);
    const jsonData = await data.json();

    if (data.status !== 200) throw jsonData;

    setData(jsonData.items);
  };

  useEffect(() => {
    const join = async () => {
      await Party.join(idParty);
    };
    join();
    return async () => {
      await Party.leave(idParty);
    };
  }, [idParty]);

  useEffect(() => {
    if (!isEmpty(socket)) {
      socket.on("party-deleted", () => {
        warning("La party a été supprimé");
        push(PARTYJOIN);
      });
      return () => {
        socket.off("party-deleted");
      };
    }
  }, [socket, push]);

  return (
    <section className={classes.root}>
      <div className={classes.track}>
        <div>
          <h2 className={classes.subtitle}>Party</h2>
          <h1 className={classes.title}>Ajout d'un son</h1>
        </div>
        <Formik
          initialErrors={initialValues}
          initialValues={initialValues}
          component={TrackForm}
          validationSchema={trackSchema}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange
        ></Formik>
      </div>
      {!isEmpty(data) && (
        <Grid container spacing={3} className={classes.containerCardMusic}>
          {data.map((value, index) => {
            return <CardMusic key={index} music={value} idParty={idParty} />;
          })}
        </Grid>
      )}
    </section>
  );
};
