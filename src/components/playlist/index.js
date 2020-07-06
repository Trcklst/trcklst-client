import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
    "& > div": {
      width: "100%!important",
    },
  },
}));

export const Playlist = ({ tracks }) => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    const makeData = async () => {
      let tabTrack = [];
      tracks.map((value) => {
        return tabTrack.push(`https://www.youtube.com/watch?v=${value.id}`);
      });
      setData(tabTrack);
    };
    makeData();
  }, [tracks]);

  return (
    <section className={classes.root}>
      <ReactPlayer url={data} />
    </section>
  );
};
