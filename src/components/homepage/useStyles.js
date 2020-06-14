import { makeStyles } from "@material-ui/core";

import landingWallpaper from "../../images/home.jpg";

export const useStyles = makeStyles({
  root: {
    flexGrow: "1",
  },
  heroImage: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${landingWallpaper})`,
  },
  hero: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0, 0.85)",
    padding: 25,
  },
  title: {
    fontSize: 55,
    textAlign: "center",
    color: "#fff",
    margin: "0",
    paddingBottom: 30,
  },
});
