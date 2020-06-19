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
}));
