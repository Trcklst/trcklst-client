import { makeStyles } from "@material-ui/core/styles";

export const loginStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 15,
  },
  form: {
    maxWidth: 960,
    width: "100%",
  },
  field: {
    width: "100%",
  },
}));
