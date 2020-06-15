import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  title: {
    padding: "16px 24px",
    "& span": {
      color: "#263238",
      fontSize: 16,
      fontWeight: 500,
      lineHeight: "20px",
      letterSpacing: -0.05,
    },
  },
  cardContent: {
    padding: 24,
  },
  cardActions: {
    padding: "16px 24px",
    "& > button": {
      backgroundColor: "#43a047",
      color: "#fff",
    },
    "& > button:hover": {
      backgroundColor: "#1b5e20",
    },
  },
});
