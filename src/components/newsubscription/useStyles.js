import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  party: {
    position: "relative",
    width: "100%",
    maxWidth: 1220,
    padding: 15,
    marginTop: -64,
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
  error: {
    color: "red",
    fontSize: 13,
    display: "block",
    paddingTop: 25,
    paddingBottom: 25,
  },
  limit: {
    marginTop: 10,
    marginBottom: 10,
  },
  limitUser: {
    display: "flex",
    alignItems: "center",
    "& > svg": {
      color: "#06b306",
    },
  },
  limitParty: {
    display: "flex",
    alignItems: "center",
    "& > svg": {
      color: "#06b306",
    },
  },
  price: {
    color: "#b12704",
    fontSize: 17,
    lineHeight: "1.24",
    fontWeight: "700",
  },
}));
