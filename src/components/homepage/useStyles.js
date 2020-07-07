import { makeStyles } from "@material-ui/core";

import landingWallpaper from "../../images/home.jpg";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
  },
  heroImage: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${landingWallpaper})`,
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
  blackBg: {
    backgroundColor: "black",
  },
  whiteText: {
    color: "white",
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
  descriptionTitle: {
    color: "#1f1959",
  },

  descriptionContent: {
    color: "grey",
  },

  pricing: {
    backgroundColor: "#E8E9FD"
  },
  cardPrice: {
    height: "320px",
    margin: "20px",
    border: "4px solid white",
     borderRadius: "10px",
     backgroundColor: "white",
/*     boxShadow: "3px 2px 2px grey" */
  },
  listItems: {
    listStyleType:"none",
    textAlign: "left",
    marginBottom: "5px",
    color: "grey"
  }
}));
