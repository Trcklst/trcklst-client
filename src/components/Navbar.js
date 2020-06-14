import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import * as Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

import { SessionContext } from "../context/session";
import { LOGIN, HOME } from "../helpers/route-constant";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#2196f3",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#FFF",
    cursor: "pointer",
  },
  drawer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  const [drawer, setDrawer] = useState({ open: false });
  const { setSession, setUser } = useContext(SessionContext);
  const { push } = useHistory();

  const handleLogout = () => {
    Cookies.remove("session");
    setSession({ auth: false, token: "" });
    setUser({});

    return push(LOGIN);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;

    setDrawer({ ...drawer, open });
  };

  return (
    <>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => push(HOME)}
          >
            Trcklst
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Se déconnecter
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer open={drawer.open} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          className={classes.drawer}
        >
          <p>sidelist</p>
        </div>
      </Drawer>
    </>
  );
};
