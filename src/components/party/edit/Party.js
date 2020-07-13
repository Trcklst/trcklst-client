import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import { useStyles } from "./useStyles";
import { PartyForm } from "./PartyForm";
import { partySchema } from "./partySchema";
import { Party } from "../../../services/party";
import { MYPARTIES } from "../../../helpers/route-constant";
import { success, fail } from "../../common/Toast";
import { useIsMountedRef } from "../../../helpers/utility";

export const PartyEdit = (props) => {
  const classes = useStyles();
  const { idParty, name } = props.location.state;
  const { push } = useHistory();
  const isMountedRef = useIsMountedRef();

  const initialValues = {
    name: name,
  };

  const initialErrors = {
    name: "",
  };

  const handleSubmit = async ({ name }, { setSubmitting }) => {
    try {
      const data = await Party.edit(idParty, name);
      const jsonData = await data.json();

      if (data.status !== 200) throw jsonData;

      success("La party a été modifié.");

      return push(MYPARTIES);
    } catch (err) {
      fail("Une erreur s'est produite lors de la modification de la party.");
    } finally {
      if (isMountedRef.current) setSubmitting(false);
    }
  };

  return (
    <section className={classes.root}>
      <div className={classes.party}>
        <div>
          <h2 className={classes.subtitle}>Party</h2>
          <h1 className={classes.title}>Modification d'une party</h1>
        </div>
        <Formik
          initialErrors={initialErrors}
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
