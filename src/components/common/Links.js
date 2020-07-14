import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  link: {
    color: "#000",
    textDecoration: "none",
  },
  listItem: {
    height: 65,
  },
});

export const Links = ({ route, text, Icon }) => {
  const classes = useStyles();

  return (
    <NavLink className={classes.link} to={route}>
      <ListItem className={classes.listItem} button key={route}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={text}></ListItemText>
      </ListItem>
    </NavLink>
  );
};
