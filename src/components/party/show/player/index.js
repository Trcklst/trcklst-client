import React, { useState } from "react";
import { Grid, LinearProgress, Slider } from "@material-ui/core";
import ReactPlayer from "react-player";
import {
  PlayCircleOutline as PlayCircleOutlineIcon,
  PauseCircleOutline as PauseCircleOutlineIcon,
  VolumeDown as VolumeDownIcon,
  VolumeUp as VolumeUpIcon,
  VideoLibrary as VideoLibraryIcon,
} from "@material-ui/icons";

import { normalise, convertSecondstoTime } from "../utility";
import { useStyles } from "../useStyles";
import { isEmpty } from "../../../../helpers/utility";

export const PlayerIndex = ({
  owner,
  user,
  step,
  currentTrack,
  handleClickNextTrack,
  handleClickAction,
}) => {
  const classes = useStyles();
  const [trackDuration, setTrackDuration] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [trackVolume, setTrackVolume] = useState(100);
  const [open, setOpen] = useState(false);

  const handleChangeVolume = (event, newValue) => {
    setTrackVolume(newValue);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section>
      {!isEmpty(owner) && user.id === owner.id && (
        <div
          className={classes.modal}
          style={{ display: open ? "flex" : "none" }}
          onClick={() => handleClose()}
        >
          <div className={classes.modalContent}>
            <ReactPlayer
              playing={step === "Play" ? false : true}
              volume={trackVolume / 100}
              onEnded={() => handleClickNextTrack()}
              onDuration={(e) => setTrackDuration(e)}
              onProgress={(e) => setTrackProgress(e.playedSeconds)}
              onPlay={() => handleClickAction("Play")}
              onPause={() => handleClickAction("Pause")}
              url={`https://www.youtube.com/watch?v=${currentTrack.id}`}
            />
          </div>
        </div>
      )}
      <Grid
        container
        className={
          !isEmpty(owner) && user.id === owner.id
            ? classes.player
            : classes.playerNoOwn
        }
      >
        <Grid item xs={12} sm={3} className={classes.playerInfo}>
          {!isEmpty(owner) && user.id === owner.id ? (
            <div className={classes.imageUrl} onClick={() => setOpen(true)}>
              <img src={currentTrack.imageUrl} alt="imgUrl" />
              <div className={classes.videoIconBlock}>
                <div className={classes.videoIcon}>
                  <VideoLibraryIcon />
                </div>
              </div>
            </div>
          ) : (
            <img
              className={classes.imgUrl}
              src={currentTrack.imageUrl}
              alt="imgUrl"
            />
          )}
          <div className={classes.playerInfoName}>
            <p>{currentTrack.name}</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.playerAction}>
          <div className={classes.payerActionDiv}>
            <div>
              {!isEmpty(owner) && user.id === owner.id ? (
                step === "Play" ? (
                  <PlayCircleOutlineIcon
                    onClick={() => handleClickAction(step)}
                    className={classes.iconStep}
                  />
                ) : (
                  <PauseCircleOutlineIcon
                    onClick={() => handleClickAction(step)}
                    className={classes.iconStep}
                  />
                )
              ) : step === "Play" ? (
                <PlayCircleOutlineIcon className={classes.iconStepNoOwn} />
              ) : (
                <PauseCircleOutlineIcon className={classes.iconStepNoOwn} />
              )}
            </div>
            {!isEmpty(owner) && user.id === owner.id && (
              <div className={classes.linearProgressBlock}>
                <span>{convertSecondstoTime(trackProgress)}</span>
                <LinearProgress
                  variant="determinate"
                  value={normalise(trackProgress, trackDuration)}
                  className={classes.linearProgress}
                />
                <span>
                  -{convertSecondstoTime(trackDuration - trackProgress)}
                </span>
              </div>
            )}
          </div>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.blockVolume}>
          {!isEmpty(owner) && user.id === owner.id && (
            <div className={classes.volume}>
              <Grid
                container
                spacing={2}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Grid item>
                  <VolumeDownIcon />
                </Grid>
                <Grid item xs>
                  <Slider
                    value={trackVolume}
                    style={{ color: "#FFF" }}
                    onChange={handleChangeVolume}
                    aria-labelledby="continuous-slider"
                  />
                </Grid>
                <Grid item>
                  <VolumeUpIcon />
                </Grid>
              </Grid>
            </div>
          )}
        </Grid>
      </Grid>
    </section>
  );
};
