import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import { useStyles } from "./useStyles";
import { initialValues, PartyForm } from "./PartyForm";
import { partySchema } from "./partySchema";
import { Party } from "../../../services/party";
import { MYPARTIES } from "../../../helpers/route-constant";
import { success, fail } from "../../common/Toast";

export const PartyJoin = () => {
  const classes = useStyles();
  const { push } = useHistory();

  const handleSubmit = async ({ idParty }) => {
    const data = await Party.join(idParty);
    const jsonData = await data.json();

    if (data.status !== 200) {
      fail("Une erreur s'est produite en essayant de rejoindre une party.");
      throw jsonData;
    }

    success("Vous avez rejoint la party.");

    return push(MYPARTIES);
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
