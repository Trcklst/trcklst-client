import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import LoginForm from "../components/form/login-form";
import RegisterForm from "../components/form/register-form";
import ResetPasswordForm from "../components/form/reset-password-form";
import NotFoundPage from "../pages/errors/not-found-page";

function UnauthenticatedRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/register">
        <RegisterForm />
      </Route>
      <Route path="/reset-password">
        <ResetPasswordForm />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default UnauthenticatedRoutes;
