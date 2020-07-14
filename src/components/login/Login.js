import React, { useContext } from "react";
import { Grid, Container, Box } from "@material-ui/core";
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
import { useIsMountedRef } from "../../helpers/utility";
import logo from "../../images/logo/logo_purple2.png";

export const Login = () => {
  const classes = useStyles();
  const { push } = useHistory();
  const { session, setSession } = useContext(SessionContext);
  const isMountedRef = useIsMountedRef();

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
        defineRulesFor({
          ...currentAuth,
          role: currentAuth.authorities[0],
        })
      );

      return currentAuth.authorities[0] === "ROLE_USER"
        ? push(DASHBOARDUSER)
        : push(DASHBOARDADMIN);
    } catch (err) {
      setErrors({ unauthorized: "L'email ou le mot de passe est invalide." });
    } finally {
      if (isMountedRef.current) setSubmitting(false);
    }
  };

  return (
    <>
      <section
        id="login"
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
              className={classes.loginForm}
            >
              <Box padding={3}>
                <Formik
                  initialErrors={initialValues}
                  initialValues={initialValues}
                  component={LoginForm}
                  validationSchema={loginSchema}
                  onSubmit={handleSubmit}
                  validateOnBlur
                  validateOnChange
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};
