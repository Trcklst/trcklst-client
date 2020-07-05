import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { Track } from "../../services/track";

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

export const CardMusic = ({ music, idParty }) => {
  const classes = useStyles();
  const { push } = useHistory();

  const handleClick = async (music) => {
    const data = await Track.add(
      idParty,
      music.videoId,
      music.title,
      music.thumbnail
    );
    const jsonData = await data.json();

    if (data.status !== 201) throw jsonData;

    push(`/party/${idParty}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={music.thumbnail}
            title="thumbnail"
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2" component="h2">
              {music.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => handleClick(music)}
          >
            Ajouter
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
