import React, { useEffect, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { Homepage } from "../components/homepage/Homepage";
import { DashboardAdmin } from "../components/dashboard/DashboardAdmin";
import { UsersIndex } from "../components/users/";
import { NotFound } from "../components/NotFound";
import {
  NOTFOUND,
  HOME,
  DASHBOARD_ADMIN,
  USERS,
} from "../helpers/route-constant";
import { getSessionCookie, SessionContext } from "../context/session";

export const RoutesConnected = () => {
  const { setUser } = useContext(SessionContext);

  useEffect(() => {
    const getOwnUser = async () => {
      const user = jwt_decode(getSessionCookie().token);
      setUser({ user });
    };
    getOwnUser();
  }, [setUser]);

  return (
    <Switch>
      <Route exact path={HOME} component={Homepage}></Route>
      <Route exact path={DASHBOARD_ADMIN} component={DashboardAdmin}></Route>
      <Route exact path={USERS} component={UsersIndex}></Route>
      <Route exact path={NOTFOUND} component={NotFound} />
      <Redirect to={NOTFOUND} />
    </Switch>
  );
};
