import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    flexDirection: "column",
    padding: 20,
  },
  track: {
    width: "100%",
    maxWidth: 1220,
  },
  title: {
    color: "#263238",
    fontSize: 24,
    fontWeight: 500,
    lineHeight: "28px",
    letterSpacing: "-0.06px",
    marginTop: 0,
  },
  subtitle: {
    color: "#546e7a",
    fontSize: 11,
    fontWeight: 500,
    lineHeight: "13px",
    letterSpacing: "0.33px",
    textTransform: "uppercase",
    marginTop: 0,
  },
  button: {
    height: 55,
    marginTop: 10,
  },
  containerCardMusic: {
    padding: 80,
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      marginTop: 25,
    },
  },
}));
