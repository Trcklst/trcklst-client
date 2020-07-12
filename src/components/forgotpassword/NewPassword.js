import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { Formik } from "formik";

import { initialValues, NewPasswordForm } from "./NewPasswordForm";
import { newPasswordSchema } from "./newPasswordSchema";
import { useStyles } from "./useStyles";
import { ResetPassword } from "../../services/reset-password";
import { useHistory } from "react-router-dom";
import { LOGIN } from "../../helpers/route-constant";
import { success, fail } from "../common/Toast";

export const NewPassword = () => {
  const classes = useStyles();
  const { push } = useHistory();

  const handleSubmit = async ({ token, password }, { setErrors }) => {
    try {
      const data = await ResetPassword.reset(token, password);
      const jsonData = await data.json();

      if (data.status !== 200) throw jsonData;

      success("Votre mot de passe a été mis à jour.");

      return push(LOGIN);
    } catch (err) {
      fail(err.message);
    }
  };

  return (
    <Grid container component="main" style={{ height: "100%" }}>
      <div className={classes.paper}>
        <Container style={{ padding: 20 }}>
          <Typography component="h1" variant="h5">
            <span> Nouveau mot passe </span>
          </Typography>
          <Formik
            initialErrors={initialValues}
            initialValues={initialValues}
            component={NewPasswordForm}
            onSubmit={handleSubmit}
            validationSchema={newPasswordSchema}
            validateOnBlur
            validateOnChange
          ></Formik>
        </Container>
      </div>
    </Grid>
  );
};
