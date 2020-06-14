import React, { useContext } from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { initialValues, LoginForm } from "./LoginForm";
import { loginSchema } from "./loginSchema";
import { useStyles } from "./useStyles";
import { Auth } from "../../services/auth";
import { SessionContext, setSessionCookie } from "../../context/session";
import { DASHBOARD_ADMIN } from "../../helpers/route-constant";

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

      setSessionCookie(jsonData.accessToken);
      setSession({ ...session, auth: true, token: jsonData.accessToken });

      const currentAuth = jwt_decode(jsonData.accessToken);
      console.log(currentAuth);

      return push(DASHBOARD_ADMIN);
    } catch (err) {
      setErrors({ unauthorized: "L'email ou le mot de passe est invalide." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid
        item
        xs={12}
        md={4}
        component={Paper}
        square
        className={classes.grid}
      >
        <div className={classes.paper}>
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
        </div>
      </Grid>
      <Grid item xs={false} md={8} className={classes.image}>
        <div className={classes.backgroundTitle}>
          <h2 className={classes.title}>Trcklst</h2>
        </div>
      </Grid>
    </Grid>
  );
};
