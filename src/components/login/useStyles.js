import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  // general
  purpleText: {
    color: "#1f1959",
  },
  purpleBg: {
    backgroundColor: "#1f1959",
  },
  whiteText: {
    color: "white",
  },
  whiteBg: {
    backgroundColor: "#F9F9F9",
  },
  blackBg: {
    backgroundColor: "black",
  },
  boldText: {
    fontFamily: "'PublicSansBold' !important",
  },
  greyText: {
    color: "#7e8391",
  },
  hHeight: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },

  loginForm: {
    backgroundColor: "white",
    boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
  },
  link: {
    textDecoration: "none",
    color: "#7e8391",
  },
  submit: {
    textTransform: "none",
    backgroundColor: "#1f1959",
    boxShadow: "none",
    borderRadius: "40px",
  },
  error: {
    color: "red",
    fontSize: 13,
  },
  appbar: {
    display: "none",
  },
}));
