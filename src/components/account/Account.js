import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import { Divider, Grid, makeStyles, Tabs, Tab } from "@material-ui/core";
import { Formik } from "formik";

import { AccountProfile } from "./AccountProfile";
import {
  UpdateSecurity,
  initalValues as securityValues,
} from "./updateSecurity";
import { securitySchema } from "./schemas/securitySchema";
import { SessionContext } from "../../context/session";
import { success } from "../common/Toast";
import { Me } from "../../services/me";

const useStyles = makeStyles({
  subtitle: {
    color: "#546e7a",
    fontSize: 11,
    fontWeight: 500,
    lineHeight: "13px",
    letterSpacing: 0.33,
    textTransform: "uppercase",
  },
  title: {
    color: "#263238",
    fontSize: 24,
    fontWeight: 500,
    lineHeight: "28px",
    letterSpacing: -0.06,
    margin: 0,
  },
  tabs: {
    marginTop: 24,
  },
  divider: {
    marginBottom: 24,
  },
});

const initialStatus = { loading: false };

export const Account = () => {
  const classes = useStyles();
  const { user } = useContext(SessionContext);
  let { url } = useRouteMatch();
  const location = useLocation();
  const tabValues = { account: 0, general: 0, security: 1 };
  const endpoint = location.pathname.split("/").pop();
  const [value, setValue] = useState(tabValues[endpoint]);

  const handleSubmitSecurity = async (
    { oldPassword, newPassword },
    { setSubmitting, resetForm, setErrors }
  ) => {
    const data = await Me.resetPassword(newPassword, oldPassword);
    const jsonData = await data.json();

    if (data.status === 200) {
      success(`Votre mot de passe a été mis à jour`);
      setSubmitting(false);
      resetForm();
    }

    setErrors({ oldPassword: jsonData.message });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section style={{ padding: 20 }}>
      <Router>
        <>
          <h2 className={classes.subtitle}>Compte</h2>
          <h1 className={classes.title}>Gestion du compte</h1>
        </>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          className={classes.tabs}
        >
          <Tab label="Général" component={Link} to={`${url}/general`} />
          <Tab label="Sécurité" component={Link} to={`${url}/security`} />
        </Tabs>
        <Divider className={classes.divider} />
        <Switch>
          <Redirect exact from={url} to={`${url}/general`} />
          <Route path={`${url}/general`}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <AccountProfile user={user} />
              </Grid>
            </Grid>
          </Route>
          <Route path={`${url}/security`}>
            <Formik
              initialErrors={securityValues}
              initialValues={securityValues}
              component={UpdateSecurity}
              validationSchema={securitySchema}
              onSubmit={handleSubmitSecurity}
              initialStatus={initialStatus}
              validateOnBlur
              validateOnChange
            ></Formik>
          </Route>
        </Switch>
      </Router>
    </section>
  );
};
