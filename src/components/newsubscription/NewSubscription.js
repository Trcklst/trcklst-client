import React from "react";
import { useStyles } from "./useStyles";
import { Formik } from "formik";
import { initialValues, NewSubscriptionForm } from "./NewSubscriptionForm";
import { newsubscriptionSchema } from "./newsubscriptionSchema";

export const NewSubscription = () => {
    const classes = useStyles();

return (
    <section className={classes.root}>
      <div className={classes.party}>
        <div>
          <h2 className={classes.subtitle}>S'abonner</h2>
        </div>
        <Formik
          initialErrors={initialValues}
          initialValues={initialValues}
          validationSchema={newsubscriptionSchema}
          component={NewSubscriptionForm}
          validateOnBlur
          validateOnChange
        ></Formik>
      </div>
    </section>    );
};


