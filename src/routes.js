import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Homepage } from "./components/homepage/Homepage";
import { NotFound } from "./components/NotFound";

import { NOTFOUND, HOME } from "./helpers/route-constant";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={HOME} component={Homepage}></Route>
      <Route exact path={NOTFOUND} component={NotFound} />
      <Redirect to={NOTFOUND} />
    </Switch>
  );
};
