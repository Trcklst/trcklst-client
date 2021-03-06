import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

import { SideList } from "../sidelist/SideList";
import { useStyles } from "./useStyles";
import { SessionContext } from "../../context/session";
import { LOGIN, REGISTER, HOME } from "../../helpers/route-constant";

export const Navbar = () => {
  const classes = useStyles();
  const [drawer, setDrawer] = useState({ open: false });
  const { user } = useContext(SessionContext);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;

    setDrawer({ ...drawer, open });
  };

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        {Object.keys(user).length !== 0 ? (
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          ""
        )}
        <Typography variant="h6" className={classes.title}>
          <Link to={HOME} className={classes.link}>
            Trcklst
          </Link>
        </Typography>
        {Object.keys(user).length !== 0 ? (
          <Drawer open={drawer.open} onClose={toggleDrawer(false)}>
            <div
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
              className={classes.drawer}
            >
              <SideList />
            </div>
          </Drawer>
        ) : (
          <>
            <Box paddingY={1} paddingX={2}>
              <Link to={LOGIN} className={classes.link}>
                Se connecter
              </Link>
            </Box>
            <Box paddingY={1} paddingX={2} className={classes.signInButton}>
              <Link to={REGISTER} className={classes.link}>
                S'inscrire
              </Link>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
