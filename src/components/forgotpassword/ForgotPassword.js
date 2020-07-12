import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import { initialValues, ForgotPasswordForm } from "./ForgotPasswordForm";
import { useStyles } from "./useStyles";
import { ResetPassword } from "../../services/reset-password";
import { NEWPASSWORD } from "../../helpers/route-constant";
import { forgotPasswordSchema } from "./forgotPasswordSchema";

export const ForgotPassword = () => {
  const classes = useStyles();
  const { push } = useHistory();

  const handleSubmit = async ({ email }, { setErrors }) => {
    try {
      const data = await ResetPassword.sendmail(email);
      const jsonData = await data.json();

      if (data.status !== 200) throw jsonData;

      return push(NEWPASSWORD);
    } catch (error) {
      setErrors({ error: error.message });
    }
  };

  return (
    <Grid container component="main" style={{ height: "100%" }}>
      <div className={classes.paper}>
        <Container style={{ padding: 20 }}>
          <Typography component="h1" variant="h5">
            <span> Mot de passe oublié ? </span>
          </Typography>
          <Formik
            initialErrors={initialValues}
            initialValues={initialValues}
            component={ForgotPasswordForm}
            onSubmit={handleSubmit}
            validationSchema={forgotPasswordSchema}
            validateOnBlur
            validateOnChange
          ></Formik>
        </Container>
      </div>
    </Grid>
  );
};
