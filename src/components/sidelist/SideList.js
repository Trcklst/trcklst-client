import React, { useContext } from "react";
import {
  List,
  makeStyles,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import {
  Apps as AppsIcon,
  PeopleAlt as PeopleAltIcon,
  Home as HomeIcon,
  Album as AlbumIcon,
  Subscriptions as SubscriptionsIcon,
  LibraryMusic as LibraryMusicIcon,
  Directions as DirectionsIcon,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import * as Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

import {
  HOME,
  USERS,
  DASHBOARDADMIN,
  DASHBOARDUSER,
  LOGIN,
  ACCOUNTADMIN,
  ACCOUNTUSER,
  PARTYNEW,
  MYSUBSRIPTIONS,
  MYPARTIES,
  PARTYJOIN,
} from "../../helpers/route-constant";
import { Links } from "../common/Links";
import { SideListProfile } from "./SideListProfile";
import { SessionContext } from "../../context/session";
import { Can } from "../../helpers/Can";
import { Party } from "../../services/party";

const useStyles = makeStyles((theme) => ({
  list: {
    minWidth: 250,
    flexGrow: 1,
  },
  title: {
    padding: 15,
  },
  link: {
    color: "inherit",
    textDecoration: "inherit",
  },
  linkAccount: {
    color: "inherit",
    textDecoration: "inherit",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  },
  disconnect: {
    padding: 15,
    fontSize: 11,
  },
}));

export const SideList = () => {
  const classes = useStyles();
  const { user } = useContext(SessionContext);
  const location = useLocation();
  const { setSession, setUser } = useContext(SessionContext);
  const { push } = useHistory();

  const handleLogout = async () => {
    const path = location.pathname.split("/");
    if (path.length === 3) {
      if (path[1] === "party") {
        if (path[2] !== "new" && path[2] !== "join") {
          const endpoint = path.pop();
          await Party.leave(endpoint);
        }
      }
    }
    Cookies.remove("session");
    setSession({ auth: false, token: "" });
    setUser({});
    return push(LOGIN);
  };

  return (
    <>
      <div className={classes.title}>
        <Typography variant="h6" noWrap>
          <Link to={HOME} className={classes.link}>
            Trcklst
          </Link>
        </Typography>
      </div>
      <Divider />
      <List className={classes.list}>
        <Links route={HOME} text="Accueil" Icon={HomeIcon} />
        <Links
          route={user.role === "ROLE_ADMIN" ? DASHBOARDADMIN : DASHBOARDUSER}
          text="Dashboard"
          Icon={AppsIcon}
        />
        <Can I="view" a="Users">
          {() => (
            <Links route={USERS} text="Utilisateurs" Icon={PeopleAltIcon} />
          )}
        </Can>
        <Can I="add" a="Party">
          {() => (
            <Links route={PARTYNEW} text="Créer une party" Icon={AlbumIcon} />
          )}
        </Can>
        <Can I="view" a="MyParties">
          {() => (
            <Links route={MYPARTIES} text="Mes party" Icon={LibraryMusicIcon} />
          )}
        </Can>
        <Can I="join" a="Party">
          {() => (
            <Links
              route={PARTYJOIN}
              text="Rejoindre une party"
              Icon={DirectionsIcon}
            />
          )}
        </Can>
        <Can I="view" a="MySubscriptions">
          {() => (
            <Links
              route={MYSUBSRIPTIONS}
              text="Mes abonnements"
              Icon={SubscriptionsIcon}
            />
          )}
        </Can>
      </List>
      <Link
        to={user.role === "ROLE_ADMIN" ? ACCOUNTADMIN : ACCOUNTUSER}
        className={classes.linkAccount}
      >
        <SideListProfile user={user} />
      </Link>
      <Button
        className={classes.disconnect}
        color="primary"
        onClick={handleLogout}
      >
        Se déconnecter
      </Button>
    </>
  );
};
