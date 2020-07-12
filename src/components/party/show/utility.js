import { Button, withStyles } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

export const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
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
