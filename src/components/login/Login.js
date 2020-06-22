import React, { useContext } from "react";
import { Typography, Grid, Container } from "@material-ui/core";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { initialValues, LoginForm } from "./LoginForm";
import { loginSchema } from "./loginSchema";
import { useStyles } from "./useStyles";
import { Auth } from "../../services/auth";
import { SessionContext, setSessionCookie } from "../../context/session";
import { DASHBOARDADMIN, DASHBOARDUSER } from "../../helpers/route-constant";
import { ability, defineRulesFor } from "../../helpers/ability";

export const Login = () => {
  const classes = useStyles();
  const { push } = useHistory();
  const { session, setSession } = useContext(SessionContext);

  const handleSubmit = async (
    { email, password },
    { setSubmitting, setErrors }
  ) => {
    try {
      const data = await Auth.login(email, password);
      const jsonData = await data.json();

      if (data.status !== 200) throw jsonData;

      setSessionCookie(jsonData.access_token);
      setSession({
        ...session,
        auth: true,
        token: jsonData.access_token,
      });

      const currentAuth = jwt_decode(jsonData.access_token);

      ability.update(
        defineRulesFor({ ...currentAuth, role: currentAuth.authorities[0] })
      );

      return currentAuth.authorities[0] === "ROLE_USER"
        ? push(DASHBOARDUSER)
        : push(DASHBOARDADMIN);
    } catch (err) {
      setErrors({ unauthorized: "L'email ou le mot de passe est invalide." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <div className={classes.paper}>
        <Container maxWidth="xs">
          <Typography
            component="h1"
            variant="h5"
            className={classes.typography}
          >
            <span className={classes.slash}>/</span>Se connecter
          </Typography>
          <Formik
            initialErrors={initialValues}
            initialValues={initialValues}
            component={LoginForm}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
            validateOnBlur
            validateOnChange
          ></Formik>
        </Container>
      </div>
    </Grid>
  );
};
