import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Formik } from "formik";
import { Grid } from "@material-ui/core";

import { useStyles } from "./useStyles";
import { initialValues, TrackForm } from "./TrackForm";
import { trackSchema } from "./trackSchema";
import { isEmpty } from "../../../helpers/utility";
import { Track } from "../../../services/track";
import { CardMusic } from "../CardMusic";

export const TrackNew = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const endpoint = location.pathname.split("/");
  const idParty = props.location.state
    ? props.location.state.idParty
    : endpoint[endpoint.length - 3];
  const [data, setData] = useState({});

  const handleSubmit = async ({ title }) => {
    const data = await Track.search(title);
    const jsonData = await data.json();

    if (data.status !== 200) throw jsonData;

    setData(jsonData.items);
  };

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
