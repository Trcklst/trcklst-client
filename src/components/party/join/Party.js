import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import { useStyles } from "./useStyles";
import { initialValues, PartyForm } from "./PartyForm";
import { partySchema } from "./partySchema";

export const PartyJoin = () => {
  const classes = useStyles();
  const { push } = useHistory();

  const handleSubmit = async ({ idParty }) => {
    return push(`/party/${idParty}`);
  };

  return (
    <section className={classes.root}>
      <div className={classes.party}>
        <div>
          <h2 className={classes.subtitle}>Party</h2>
          <h1 className={classes.title}>Rejoindre une party</h1>
        </div>
        <Formik
          initialErrors={initialValues}
          initialValues={initialValues}
          component={PartyForm}
          validationSchema={partySchema}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange
        ></Formik>
      </div>
    </section>
  );
};
