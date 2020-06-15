import React, { useEffect, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { Homepage } from "../components/homepage/Homepage";
import { DashboardAdmin } from "../components/dashboard/DashboardAdmin";
import { DashboardUser } from "../components/dashboard/DashboardUser";
import { UsersIndex } from "../components/users/";
import { Account } from "../components/account/Account";
import { NotFound } from "../components/NotFound";
import {
  NOTFOUND,
  HOME,
  DASHBOARD_ADMIN,
  USERS,
  ACCOUNT_ADMIN,
  DASHBOARD_USER,
  ACCOUNT_USER,
} from "../helpers/route-constant";
import { getSessionCookie, SessionContext } from "../context/session";
import { Can } from "../helpers/Can";

export const RoutesConnected = () => {
  const { setUser } = useContext(SessionContext);

  useEffect(() => {
    const getOwnUser = async () => {
      const user = jwt_decode(getSessionCookie().token);
      const temp = {
        ...user,
        id: parseInt(user.sub),
        role: "USER",
      };
      setUser(temp);
    };
    getOwnUser();
  }, [setUser]);

  return (
    <Switch>
      <Route exact path={HOME} component={Homepage}></Route>
      <Route
        exact
        path={DASHBOARD_ADMIN}
        component={(props) => (
          <Can I="view" a="DashboardAdmin">
            {() => <DashboardAdmin {...props} />}
          </Can>
        )}
      />
      <Route
        exact
        path={DASHBOARD_USER}
        component={(props) => (
          <Can I="view" a="DashboardUser">
            {() => <DashboardUser {...props} />}
          </Can>
        )}
      />
      <Route
        exact
        path={USERS}
        component={(props) => (
          <Can I="view" a="Users">
            {() => <UsersIndex {...props} />}
          </Can>
        )}
      />
      <Route
        path={ACCOUNT_ADMIN}
        component={(props) => (
          <Can I="view" a="AccountAdmin">
            {() => <Account {...props} />}
          </Can>
        )}
      />
      <Route
        path={ACCOUNT_USER}
        component={(props) => (
          <Can I="view" a="AccountUser">
            {() => <Account {...props} />}
          </Can>
        )}
      />
      <Route exact path={NOTFOUND} component={NotFound} />
      <Redirect to={NOTFOUND} />
    </Switch>
  );
};
