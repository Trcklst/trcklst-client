import React from "react";
import { Formik } from "formik";
import { Grid, Container, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { initialValues, RegisterForm } from "./RegisterForm";
import { registerSchema } from "./registerSchema";
import { Auth } from "../../services/auth";
import { LOGIN } from "../../helpers/route-constant";
import { useStyles } from "./useStyles";
import { useIsMountedRef } from "../../helpers/utility";
import logo from "../../images/logo/logo_purple2.png";

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
      setErrors({ email: error.message });
    } finally {
      if (isMountedRef.current) setSubmitting(false);
    }
  };

  return (
    <section
      id="register"
      className={`${classes.purpleText} ${classes.whiteBg} ${classes.hHeight}`}
    >
      <Container maxWidth="lg">
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid item xl={2} lg={2} md={2} sm={3} xs={5}>
            <Box m={2}>
              <img src={logo} alt="logo" width="100%" />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid
            item
            xl={4}
            lg={4}
            md={5}
            sm={10}
            xs={10}
            className={classes.registerForm}
          >
            <Box padding={3}>
              <Formik
                initialErrors={initialValues}
                initialValues={initialValues}
                component={RegisterForm}
                validationSchema={registerSchema}
                onSubmit={handleSubmit}
                validateOnBlur
                validateOnChange
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
