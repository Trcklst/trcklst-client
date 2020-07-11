import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { useStyles } from "./useStyles";

import { SideList } from "../sidelist/SideList";
import { SessionContext } from "../../context/session";

import { Box, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { LOGIN, REGISTER, HOME } from "../../helpers/route-constant";
import { logoWhite2 } from "../../images/logo_white2.png";

export const Navbar = () => {
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

  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.appbar}>
        <Container>
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
                <img src={logoWhite2} alt="logoWhite" />
              </Link>
            </Typography>
            {Object.keys(user).length !== 0 ? (
              <>
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
              </>
            ) : (
              <>
                <Box py={2}>
                  <Link to={LOGIN} className={classes.link}>
                    Connexion
                  </Link>
                </Box>
                <Box px={2}>
                  <Link to={REGISTER} className={classes.link}>
                    S'inscrire
                  </Link>
                </Box>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};