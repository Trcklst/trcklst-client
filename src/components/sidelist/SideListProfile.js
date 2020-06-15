import React, { useContext } from "react";
import { Avatar, makeStyles, Button } from "@material-ui/core";
import * as Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

import { SessionContext } from "../../context/session";
import { LOGIN } from "../../helpers/route-constant";

const useStyles = makeStyles({
  header: {
    padding: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: { marginBottom: 15 },
  title: {
    fontSize: 20,
    color: "rgba(0,0,0,.87)",
    fontWeight: "500",
    padding: 0,
    margin: 0,
  },
  subtitle: {
    color: "rgba(0,0,0,.6)",
    fontSize: 14,
    fontWeight: "400",
    padding: 0,
    margin: 0,
  },
  logout: {
    marginTop: 15,
  },
});

export const SideListProfile = ({ user }) => {
  const classes = useStyles();
  const { setSession, setUser } = useContext(SessionContext);
  const { push } = useHistory();

  const handleLogout = () => {
    Cookies.remove("session");
    setSession({ auth: false, token: "" });
    setUser({});

    return push(LOGIN);
  };

  return (
    <div className={classes.header}>
      <Avatar className={classes.avatar} src="/" />
      <h6 className={classes.subtitle}>{user.email}</h6>
      <Button className={classes.logout} color="primary" onClick={handleLogout}>
        Se déconnecter
      </Button>
    </div>
  );
};
