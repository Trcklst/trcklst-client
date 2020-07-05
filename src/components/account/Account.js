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
import { UpdateGeneral } from "./updateGeneral";
import {
  UpdateIdentifier,
  initalValues as identifierValues,
} from "./updateIdentifier";
import {
  UpdateSecurity,
  initalValues as securityValues,
} from "./updateSecurity";
import { generalSchema } from "./schemas/generalSchema";
import { identifierSchema } from "./schemas/identifierSchema";
import { securitySchema } from "./schemas/securitySchema";
import { SessionContext } from "../../context/session";

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
  const tabValues = { account: 0, general: 0, identifier: 1, security: 2 };
  const endpoint = location.pathname.split("/").pop();
  const [value, setValue] = useState(tabValues[endpoint]);

  const handleSubmitGeneral = async (
    { newFirstname, newLastname },
    { setSubmitting, setErrors, setFieldError, resetForm, setStatus }
  ) => {
    console.log(newFirstname, newLastname);
  };

  const handleSubmitIdentifier = async (
    { newEmail, password },
    { setSubmitting, setErrors, setFieldError, resetForm, setStatus }
  ) => {
    console.log(newEmail, password);
  };

  const handleSubmitSecurity = async (
    { oldPassword, newPassword },
    { setSubmitting, setErrors, setFieldError, resetForm, setStatus }
  ) => {
    console.log(oldPassword, newPassword);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <>
        <h2 className={classes.subtitle}>Gestion du compte</h2>
        <h1 className={classes.title}>Modifier les informations du compte</h1>
      </>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        className={classes.tabs}
      >
        <Tab label="Général" component={Link} to={`${url}/general`} />
        <Tab label="Identification" component={Link} to={`${url}/identifier`} />
        <Tab label="Sécurité" component={Link} to={`${url}/security`} />
      </Tabs>
      <Divider className={classes.divider} />
      <Switch>
        <Redirect exact from={url} to={`${url}/general`} />
        <Route path={`${url}/general`}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <AccountProfile user={user} />
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <Formik
                initialErrors={{}}
                initialValues={{
                  newFirstname: "",
                  newLastname: "",
                }}
                component={UpdateGeneral}
                validationSchema={generalSchema}
                onSubmit={handleSubmitGeneral}
                initialStatus={initialStatus}
                validateOnBlur
                validateOnChange
              ></Formik>
            </Grid>
          </Grid>
        </Route>
        <Route path={`${url}/identifier`}>
          <Formik
            initialErrors={identifierValues}
            initialValues={identifierValues}
            component={UpdateIdentifier}
            validationSchema={identifierSchema}
            onSubmit={handleSubmitIdentifier}
            initialStatus={initialStatus}
            validateOnBlur
            validateOnChange
          ></Formik>
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
  );
};
