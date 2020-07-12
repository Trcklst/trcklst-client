import React from "react";
import { useStyles } from "./useStyles";
import { Formik } from "formik";
import { initialValues, NewSubscriptionForm } from "./NewSubscriptionForm";
import { newsubscriptionSchema } from "./newsubscriptionSchema";
import { Subscriptions } from "../../services/subscriptions";

export const NewSubscription = () => {
  const classes = useStyles();

  const handleSubmit = async (
    { cardNumber, month, year, cryptogramme },
    { setSubmitting, setErrors }
  ) => {
    try {
      let creditCard = {
        'number':cardNumber,
        'expirationMonth':month,
        'expirationYear':year,
        'cvc':cryptogramme
      };

      let subscriptionType = 'PRO'; 

      const data = await Subscriptions.new(creditCard, subscriptionType);
      const jsonData = await data.json();
      console.log(data);
      console.log(jsonData);
      
    } catch (err) {
      setErrors({ unauthorized: "Les informations renseignées sont invalides." });
    } finally {
      setSubmitting(false);
    }
  };

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
            onSubmit={handleSubmit}
            validateOnBlur
            validateOnChange
          ></Formik>
        </div>
      </section>    );
};


