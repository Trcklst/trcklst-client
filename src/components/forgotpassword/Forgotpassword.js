import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { Formik } from "formik";
import { initialValues, ForgotpasswordForm } from "./ForgotpasswordForm";
import { useStyles } from "./useStyles";
import { ResetPassword } from "../../services/reset-password";


export const Forgotpassword = () => {
  const classes = useStyles();

  const handleSubmit = async ({ email }, { setErrors }) => {
    try {
      const data = await ResetPassword.sendmail(email);
      const jsonData = await data.json();

      if (data.status !== 200) throw jsonData;

    } catch (error) {
      setErrors({ error: error.message });
    }
  };
    

return (
<Grid container component="main">
    <div className={classes.paper}>
        <Container maxWidth="xs">
          <Typography
            component="h1"
            variant="h5"
          >
            <span> Mot de passe oublié ? </span>
          </Typography>
          <Formik
            initialErrors={initialValues}
            initialValues={initialValues}
            component={ForgotpasswordForm}            
            onSubmit={handleSubmit}
            validateOnBlur
            validateOnChange
          ></Formik>
        </Container>
    </div>
    </Grid>);
};