import React from "react";
import { makeStyles, Grid, Box, IconButton, Badge } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { Track } from "../../../services/track";

const useStyles = makeStyles({
  container: {
    alignItems: "center",
  },
  boxIcon: {
    textAlign: "center",
  },
  icon: {
    width: "35px",
    height: "35px",
    borderRadius: "70px",
  },
});

export const Music = ({ id, icon, title, votesCount, idParty }) => {
  const classes = useStyles();

  const handleClick = async () => {
    const data = await Track.vote(idParty, id);
    const jsonData = await data.json();

    if (data.status !== 200) throw jsonData;
  };

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
      <Grid item xs={2}>
        <Badge color="secondary" badgeContent={votesCount}>
          <IconButton
            style={{ padding: 1 }}
            aria-label="like"
            onClick={() => {
              handleClick();
            }}
          >
            <FavoriteIcon style={{ color: "rgb(15, 11, 255)" }} />
          </IconButton>
        </Badge>
      </Grid>
    </Grid>
  );
};
