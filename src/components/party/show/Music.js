import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  Box,
  IconButton,
  Typography,
  Badge,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "50px",
    height: "50px",
    borderRadius: "70px",
  },
}));

export const Music = ({ icon, title }) => {
  const classes = useStyles();
  const [count, setCount] = useState(1);

  return (
    <Grid container>
      <Grid item xs={1}>
        <Typography variant="body1">1.</Typography>
      </Grid>
      <Grid item xs={1}>
        <Box mx="auto">
          <img src={icon} alt="Icon" className={classes.icon} />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <p>{title}</p>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={1}>
        <IconButton
          aria-label="like"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          <FavoriteIcon style={{ color: "rgb(255, 0, 47)" }} />
        </IconButton>
      </Grid>
      <Grid item xs={1}>
        <Badge color="secondary" badgeContent={count}></Badge>
      </Grid>
    </Grid>
  );
};
