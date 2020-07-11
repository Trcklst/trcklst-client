import { makeStyles } from "@material-ui/core";

import landingWallpaper from "../../images/home.jpg";

export const useStyles = makeStyles((theme) => ({
  // general
  purpleText: {
    color: "#1f1959",
  },
  purpleBg: {
    backgroundColor: "1f1959",
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

  // section header
  heroImage: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${landingWallpaper})`,
  },
  customButton: {
    color: "black",
    backgroundColor: "white",
    border: "1px solid white",
    textTransform: "none",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
      boxShadow: "0 0 50px white",
      textTransform: "none",
    },
  },

  // main content section
  stepsBox: {
    height: "500px",
    backgroundColor: "white",
    margin: "20px",
    boxShadow: "0 20px 30px 0 rgba(36,50,66,.14)",
  },

  appbar: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttonOffer: {
    borderRadius: "50px",
    backgroundColor: "black",
    letterSpacing: "2px",
    boxShadow: "none",
  },

  link: {
    textDecoration: "none",
    color: "white",
  },
  shapeDivider: {
    bottom: 0,
    left: 0,
    width: "100%",
    overflow: "hidden",
    lineHeight: 0,
    transform: "rotate(180deg)",
  },

  shapeSvg: {
    position: "relative",
    display: "block",
    width: "calc(100% + 1.3px)",
    height: "150px",
  },

  shapeFill: {
    fill: "#f9f9f9",
  },

  descriptionTitle: {
    color: "#1f1959",
  },

  descriptionContent: {
    color: "grey",
  },

  pricingBox: {
    padding: "20px",
    margin: "0 10px",
  },
}));
