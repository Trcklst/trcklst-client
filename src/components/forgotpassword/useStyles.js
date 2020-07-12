import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#f4f4f5",
  },
  grid: {
    display: "flex",
  },
  link: {
    textDecoration: "none",
  },
  backgroundTitle: {
    height: "100vh",
    backgroundColor: "#000000b8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    color: "#FFF",
    fontSize: 50,
    letterSpacing: 3,
    textTransform: "uppercase",
    margin: 5,
  },
  paper: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: '40px 0px',
  },
  slash: {
    color: "#3f51b5",
    fontSize: 35,
    paddingRight: 5,
  },
  typography: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    textTransform: "uppercase",
    paddingTop: 5,
    fontSize: "1.5rem",
    fontWeight: 700,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    padding: 14,
    margin: "16px 0 16px 0",
  },
  error: {
    color: "red",
    fontSize: 13,
  },
  
}));