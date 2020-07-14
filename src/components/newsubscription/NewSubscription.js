import React from "react";
import { useStyles } from "./useStyles";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import { initialValues, NewSubscriptionForm } from "./NewSubscriptionForm";
import { newsubscriptionSchema } from "./newsubscriptionSchema";
import { Subscriptions } from "../../services/subscriptions";
import { MYSUBSRIPTIONS } from "../../helpers/route-constant";
import { success } from "../common/Toast";
import { useIsMountedRef } from "../../helpers/utility";

export const NewSubscription = () => {
  const classes = useStyles();
  const { push } = useHistory();
  const isMountedRef = useIsMountedRef();

  const handleSubmit = async (
    { cardNumber, month, year, cryptogramme, typeAbonnement },
    { setSubmitting, setErrors }
  ) => {
    try {
      let creditCard = {
        number: cardNumber,
        expirationMonth: month,
        expirationYear: year,
        cvc: cryptogramme,
      };

      const data = await Subscriptions.new(creditCard, typeAbonnement);
      const jsonData = await data.json();

      if (data.status !== 200) throw jsonData;

      success(
        "Votre paiement a bien été effectué. Votre abonnement sera bientôt mis en place"
      );

      return push(MYSUBSRIPTIONS);
    } catch (err) {
      setErrors({
        unauthorized: "Les informations renseignées sont invalides.",
      });
    } finally {
      if (isMountedRef.current) setSubmitting(false);
    }
  };

  return (
    <section className={classes.root}>
      <div className={classes.party}>
        <div>
          <h2 className={classes.title}>Abonnement mensuel</h2>
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
    </section>
  );
};
