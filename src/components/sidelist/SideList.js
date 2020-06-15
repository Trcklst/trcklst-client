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
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import * as Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

import {
  HOME,
  USERS,
  DASHBOARD_ADMIN,
  LOGIN,
  ACCOUNT_ADMIN,
} from "../../helpers/route-constant";
import { Links } from "../common/Links";
import { SideListProfile } from "./SideListProfile";
import { SessionContext } from "../../context/session";

const useStyles = makeStyles((theme) => ({
  list: {
    minWidth: 250,
    flexGrow: 1,
  },
  title: {
    padding: "20px",
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
    [theme.breakpoints.down("sm")]: { display: "none" },
  },
}));

export const SideList = () => {
  const classes = useStyles();
  const { user } = useContext(SessionContext);
  const { setSession, setUser } = useContext(SessionContext);
  const { push } = useHistory();

  const handleLogout = () => {
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
        <Links route={HOME} text="Accueil" Icon={HomeIcon}></Links>
        <Links route={DASHBOARD_ADMIN} text="Dashboard" Icon={AppsIcon}></Links>
        <Links
          route={USERS}
          text="Voir les utilisateurs"
          Icon={PeopleAltIcon}
        ></Links>
      </List>
      <Link to={ACCOUNT_ADMIN} className={classes.linkAccount}>
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
