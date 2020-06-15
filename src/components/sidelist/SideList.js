import React, { useContext } from "react";
import { List, makeStyles, Typography, Divider } from "@material-ui/core";
import {
  Apps as AppsIcon,
  PeopleAlt as PeopleAltIcon,
  Home as HomeIcon,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

import { HOME, USERS, DASHBOARD_ADMIN } from "../../helpers/route-constant";
import { Links } from "../common/Links";
import { SideListProfile } from "./SideListProfile";
import { SessionContext } from "../../context/session";

const useStyles = makeStyles({
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
});

export const SideList = () => {
  const classes = useStyles();
  const { user } = useContext(SessionContext);

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
      <SideListProfile user={user} />
    </>
  );
};
