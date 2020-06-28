import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Homepage } from "../components/homepage/Homepage";
import { Login } from "../components/login/Login";
import { Register } from "../components/register/Register";
import { Forgotpassword } from "../components/forgotpassword/Forgotpassword";
import { NotFound } from "../components/NotFound";
import { NOTFOUND, HOME, LOGIN, REGISTER, FORGOTPASSWORD } from "../helpers/route-constant";

export const RoutesNotConnected = () => {
  return (
    <Switch>
      <Route exact path={HOME} component={Homepage}></Route>
      <Route exact path={LOGIN} component={Login}></Route>
      <Route exact path={REGISTER} component={Register}></Route>
      <Route exact path={FORGOTPASSWORD} component={Forgotpassword}></Route>
      <Route exact path={NOTFOUND} component={NotFound} />
      <Redirect to={NOTFOUND} />
    </Switch>
  );
};
