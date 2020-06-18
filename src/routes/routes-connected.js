import React, { useEffect, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { Homepage } from "../components/homepage/Homepage";
import { DashboardAdmin } from "../components/dashboard/admin/DashboardAdmin";
import { DashboardUser } from "../components/dashboard/user/DashboardUser";
import { UsersIndex } from "../components/users/";
import { Account } from "../components/account/Account";
import { NotFound } from "../components/NotFound";
import { PartyNew } from "../components/party/new/Party";
import { Subscriptions } from "../components/subscriptions/admin/";
import { MySubscriptions } from "../components/subscriptions/user/";
import { MyInvoices } from "../components/invoices/";
import {
  NOTFOUND,
  HOME,
  DASHBOARDADMIN,
  USERS,
  ACCOUNTADMIN,
  DASHBOARDUSER,
  ACCOUNTUSER,
  PARTYNEW,
  MYSUBSRIPTIONS,
  SUBSRIPTIONS,
  MYINVOICES,
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
        role: process.env.REACT_APP_ROLE_USER,
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
        path={DASHBOARDADMIN}
        component={(props) => (
          <Can I="view" a="DashboardAdmin">
            {() => <DashboardAdmin {...props} />}
          </Can>
        )}
      />
      <Route
        exact
        path={DASHBOARDUSER}
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
        path={ACCOUNTADMIN}
        component={(props) => (
          <Can I="view" a="AccountAdmin">
            {() => <Account {...props} />}
          </Can>
        )}
      />
      <Route
        path={ACCOUNTUSER}
        component={(props) => (
          <Can I="view" a="AccountUser">
            {() => <Account {...props} />}
          </Can>
        )}
      />
      <Route
        path={PARTYNEW}
        component={(props) => (
          <Can I="add" a="Party">
            {() => <PartyNew {...props} />}
          </Can>
        )}
      />
      <Route
        path={SUBSRIPTIONS}
        component={(props) => (
          <Can I="view" a="Subscriptions">
            {() => <Subscriptions {...props} />}
          </Can>
        )}
      />
      <Route
        path={MYSUBSRIPTIONS}
        component={(props) => (
          <Can I="view" a="MySubscriptions">
            {() => <MySubscriptions {...props} />}
          </Can>
        )}
      />
      <Route
        path={MYINVOICES}
        component={(props) => (
          <Can I="view" a="MyInvoices">
            {() => <MyInvoices {...props} />}
          </Can>
        )}
      />
      <Route exact path={NOTFOUND} component={NotFound} />
      <Redirect to={NOTFOUND} />
    </Switch>
  );
};
