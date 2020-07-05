import React, { useState } from "react";
import { makeStyles, Grid, Box, IconButton, Badge } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: "center",
  },
  boxIcon: {
    textAlign: "center",
  },
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
    <Grid container className={classes.container}>
      <Grid item xs={2}>
        <Box mx="auto" className={classes.boxIcon}>
          <img src={icon} alt="Icon" className={classes.icon} />
        </Box>
      </Grid>
      <Grid item xs={8}>
        <p>{title}</p>
      </Grid>
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
