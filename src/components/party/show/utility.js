import { Button, withStyles } from "@material-ui/core";

export const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#3f51b5"),
    backgroundColor: "#3f51b5",
    "&:hover": {
      backgroundColor: "#303f9f",
    },
  },
}))(Button);

export const normalise = (value, trackDuration) =>
  ((value - 1) * 100) / (trackDuration - 1);

export const convertSecondstoTime = (givenSeconds) => {
  const dateObj = new Date(givenSeconds * 1000);
  const minutes = dateObj.getUTCMinutes();
  const seconds = dateObj.getSeconds();

  const timeString =
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");

  return timeString;
};
