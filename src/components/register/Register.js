import React from "react";
import { Formik } from "formik";
import { Grid, Typography, Container } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import { initialValues, RegisterForm } from "./RegisterForm";
import { registerSchema } from "./registerSchema";
import { Auth } from "../../services/auth";
import { LOGIN } from "../../helpers/route-constant";
import { useStyles } from "./useStyles";
import { useIsMountedRef } from "../../helpers/utility";

export const Register = () => {
  const classes = useStyles();
  const { push } = useHistory();
  const isMountedRef = useIsMountedRef();

  const handleSubmit = async (
    { email, password },
    { setErrors, setSubmitting }
  ) => {
    try {
      const data = await Auth.register(email, password);
      const jsonData = await data.json();

      if (data.status !== 200) throw jsonData;

      return push(LOGIN);
    } catch (error) {
      setErrors({ error: error.message });
    } finally {
      if (isMountedRef.current) setSubmitting(false);
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <div className={classes.paper}>
        <Container maxWidth="xs">
          <Typography
            className={classes.typography}
            component="h1"
            variant="h5"
          >
            <span className={classes.slash}>/</span>S'inscrire
          </Typography>
          <Formik
            initialErrors={initialValues}
            initialValues={initialValues}
            component={RegisterForm}
            validationSchema={registerSchema}
            onSubmit={handleSubmit}
            validateOnBlur
            validateOnChange
          ></Formik>
          <Typography
            className={classes.policy}
            color="textSecondary"
            variant="subtitle2"
          >
            Le mot de passe doit comporter au moins 8 caractères et contenir au
            moins une lettre majuscule, une lettre minuscule et un chiffre.
          </Typography>
          <Typography
            className={classes.policy}
            color="textSecondary"
            variant="subtitle2"
          >
            En cliquant sur "S'inscrire", vous acceptez nos conditions
            d'utilisation, notre politique de confidentialité et de recevoir des
            communications commerciales de Trcklst.
          </Typography>
          <Typography
            className={classes.policy}
            color="textSecondary"
            variant="body2"
          >
            Vous avez déjà un compte ?
            <Link to={LOGIN} className={classes.link}>
              {" "}
              Connectez-vous
            </Link>
          </Typography>
        </Container>
      </div>
    </Grid>
  );
};
