import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import { useStyles } from "./useStyles";
import { initialValues, PartyForm } from "./PartyForm";
import { partySchema } from "./partySchema";
import { Party } from "../../../services/party";
import { MYPARTIES } from "../../../helpers/route-constant";
import { success, fail } from "../../common/Toast";

export const PartyNew = () => {
  const classes = useStyles();
  const { push } = useHistory();

  const handleSubmit = async ({ name }) => {
    try {
      const data = await Party.new(name);
      const jsonData = await data.json();

      if (data.status !== 201) throw jsonData;

      success("La party a été créée.");

      return push(MYPARTIES);
    } catch (err) {
      fail(err.message);
    }
  };

  return (
    <section className={classes.root}>
      <div className={classes.party}>
        <div>
          <h2 className={classes.subtitle}>Party</h2>
          <h1 className={classes.title}>Création d'une party</h1>
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
