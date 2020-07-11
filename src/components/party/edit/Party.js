import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import { useStyles } from "./useStyles";
import { PartyForm } from "./PartyForm";
import { partySchema } from "./partySchema";
import { Party } from "../../../services/party";
import { MYPARTIES } from "../../../helpers/route-constant";
import { success, fail } from "../../common/Toast";

export const PartyEdit = (props) => {
  const classes = useStyles();
  const { idParty, name } = props.location.state;
  const { push } = useHistory();

  const initialValues = {
    name: name,
  };

  const initialErrors = {
    name: "",
  };

  const handleSubmit = async ({ name }, { setErrors }) => {
    const data = await Party.edit(idParty, name);
    const jsonData = await data.json();

    if (data.status !== 200) {
      fail("Une erreur s'est produite lors de la modification de la party.");
      setErrors({ [jsonData.errors.property]: jsonData.errors.message });
    }

    success("La party a été modifié.");

    return push(MYPARTIES);
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
