import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "black",
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
  link: {
    textDecoration: "none",
    color: "white",
  },
}));
