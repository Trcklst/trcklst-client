import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    minHeight: "100vh",
  },
  content: {
    flexGrow: 1,
    position: "relative",
    height: "100%",
    overflow: "hidden",
  },
}));
