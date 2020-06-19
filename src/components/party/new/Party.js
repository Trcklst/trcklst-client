import React, { useContext } from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import { useStyles } from "./useStyles";
import { initialValues, PartyForm } from "./PartyForm";
import { partySchema } from "./partySchema";
import { Party } from "../../../services/party";
import { MYPARTIES } from "../../../helpers/route-constant";
import { success, fail } from "../../common/Toast";
import { SessionContext } from "../../../context/session";

export const PartyNew = () => {
  const classes = useStyles();
  const { push } = useHistory();
  const { user } = useContext(SessionContext);

  const handleSubmit = async ({ name }, { setErrors }) => {
    const data = await Party.new(name, user.id);
    const jsonData = await data.json();

    if (data.status !== 201) {
      fail("Une erreur s'est produite lors de la création de la party.");
      setErrors({ [jsonData.errors.property]: jsonData.errors.message });
    }

    success("La party a été créée.");

    return push(MYPARTIES);
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
