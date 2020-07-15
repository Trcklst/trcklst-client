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
  signInButton: {
    backgroundColor: "#1f1959",
    borderRadius: "40px",
    "&:hover": {
      boxShadow: "0 0 50px #5e4eff",
    },
  },
}));
