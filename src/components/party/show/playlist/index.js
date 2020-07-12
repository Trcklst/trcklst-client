import React from "react";
import moment from "moment";
import {
  SupervisorAccount as SupervisorAccountIcon,
  CloudUpload as CloudUploadIcon,
} from "@material-ui/icons";
import { Grid, Button } from "@material-ui/core";

import backgroundPlaylist from "../../../../images/background-playlist.jpg";
import { success } from "../../../common/Toast";
import { isEmpty } from "../../../../helpers/utility";
import { ColorButton } from "../utility";
import { Music } from "./Music";
import { useStyles } from "../useStyles";

export const Playlist = ({
  id,
  name,
  createdAt,
  owner,
  user,
  step,
  endpoint,
  members,
  handleClickAction,
  handleClickAddTrack,
  tracks,
}) => {
  const classes = useStyles();

  const handleClick = () => {
    navigator.clipboard.writeText(id);
    success("Code de partage copié !");
  };

  return (
    <section className={classes.root}>
      <div className={classes.head}>
        <img
          src={backgroundPlaylist}
          alt="playlist"
          className={classes.backgroundPlaylist}
        />
        <div className={classes.mainTitle}>
          <h6 className={classes.subtitle}>Party</h6>
          <h3 className={classes.title}>{name}</h3>
          <p className={classes.createdBy}>
            Créée par <span className={classes.author}>{owner.email}</span> - le{" "}
            {moment(createdAt).format("DD/MM/YYYY hh:mm")}
          </p>
          {!isEmpty(owner) && user.id === owner.id && (
            <>
              <p className={classes.code} onClick={() => handleClick()}>
                {`code : ${id}`}
              </p>
              <ColorButton
                className={classes.buttonState}
                onClick={() => [handleClickAction(step)]}
              >
                {step}
              </ColorButton>
            </>
          )}
        </div>
      </div>
      <div className={classes.addTrack}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<CloudUploadIcon />}
          onClick={() => handleClickAddTrack()}
        >
          Ajouter un son
        </Button>
      </div>
      <div className={classes.people}>
        <SupervisorAccountIcon />
        <p>{members.length} personnes participes</p>
      </div>
      <>
        <Grid container className={classes.headPlaylist}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <p>Titre</p>
          </Grid>
          <Grid item xs={2}>
            <p>J'aime</p>
          </Grid>
        </Grid>
        <div className={classes.listMusic}>
          {tracks.map((value, index) => {
            return (
              <Music
                key={index}
                id={value.id}
                icon={value.imageUrl}
                title={value.name}
                votesCount={value.votesCount}
                idParty={endpoint}
              />
            );
          })}
        </div>
      </>
    </section>
  );
};
