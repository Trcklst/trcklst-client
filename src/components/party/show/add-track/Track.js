import React, { useState } from "react";
import { Formik } from "formik";
import { Grid } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { useStyles } from "./useStyles";
import { initialValues, TrackForm } from "./TrackForm";
import { trackSchema } from "./trackSchema";
import { isEmpty } from "../../../../helpers/utility";
import { Track } from "../../../../services/track";
import { CardMusic } from "./card-music/";

export const TrackNew = ({ idParty, setView }) => {
  const classes = useStyles();
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
          <h2 className={classes.subtitle} onClick={() => setView("playlist")}>
            <ArrowBackIcon />
            Retour
          </h2>
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
        <Grid container spacing={1} className={classes.containerCardMusic}>
          {data.map((value, index) => {
            return (
              <CardMusic
                key={index}
                music={value}
                idParty={idParty}
                setView={setView}
              />
            );
          })}
        </Grid>
      )}
    </section>
  );
};
