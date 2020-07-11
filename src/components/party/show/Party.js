import React, { useEffect, useState, useContext } from "react";
import {
  makeStyles,
  Grid,
  Button,
  withStyles,
  LinearProgress,
  Slider,
} from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import { purple } from "@material-ui/core/colors";
import {
  SupervisorAccount as SupervisorAccountIcon,
  CloudUpload as CloudUploadIcon,
  PlayCircleOutline as PlayCircleOutlineIcon,
  PauseCircleOutline as PauseCircleOutlineIcon,
  VolumeDown as VolumeDownIcon,
  VolumeUp as VolumeUpIcon,
} from "@material-ui/icons";
import moment from "moment";

import backgroundPlaylist from "../../../images/background-playlist.jpg";
import { Party } from "../../../services/party";
import { Track } from "../../../services/track";
import { Music } from "./Music";
import { SessionContext } from "../../../context/session";
import { success, fail, warning } from "../../common/Toast";
import { isEmpty } from "../../../helpers/utility";
import { PARTYJOIN } from "../../../helpers/route-constant";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    flexGrow: 1,
    padding: 20,
  },
  head: {
    display: "flex",
  },
  addTrack: {
    position: "absolute",
    top: "20px",
    right: "20px",
  },
  backgroundPlaylist: {
    border: "1px solid #000",
    width: 245,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  mainTitle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingLeft: 25,
  },
  subtitle: {
    margin: 0,
    color: "#c3c3c3",
    fontSize: 14,
    fontWeight: "100",
    textTransform: "uppercase",
  },
  title: {
    fontSize: 40,
    margin: 0,
    padding: "2px 0 15px 0",
  },
  createdBy: {
    margin: 0,
    color: "#9c9c9c",
  },
  author: {
    color: "#252525",
  },
  code: {
    cursor: "pointer",
    color: "#9c9c9c",
    "&:hover": {
      color: "#000",
    },
  },
  buttonState: {
    width: 250,
    height: 35,
    borderRadius: 25,
    marginTop: 20,
  },
  headPlaylist: {
    color: "#c3c3c3",
    textTransform: "uppercase",
    fontSize: 14,
    borderBottom: "1px solid #f5f5f5",
  },
  people: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    color: "#40eadb",
  },
  reactPlayer: {
    marginTop: 20,
  },
  player: {
    backgroundColor: "#313131",
    width: "100%",
    color: "#FFF",
  },
  playerNoOwn: {
    backgroundColor: "#313131",
    margin: -20,
    width: "calc(100% + 40px)",
    color: "#FFF",
    cursor: "not-allowed",
  },
  playerInfo: {
    display: "flex",
    padding: 5,
  },
  playerInfoName: {
    display: "flex",
    alignItems: "center",
    marginLeft: 10,
  },
  iconStep: {
    fontSize: 45,
    paddingBottom: 6,
    "&:hover": {
      cursor: "pointer",
    },
  },
  iconStepNoOwn: {
    fontSize: 45,
    marginBottom: 6,
  },
  playerAction: {
    display: "flex",
    alignItems: "center",
    padding: 20,
  },
  payerActionDiv: {
    width: "100%",
    textAlign: "center",
  },
  linearProgressBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  linearProgress: {
    width: "80%",
    marginLeft: 10,
    marginRight: 10,
  },
  blockVolume: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  volume: {
    width: 200,
  },
  listMusic: {
    height: 300,
    overflow: "overlay",
    [theme.breakpoints.down("xs")]: {
      height: 215,
    },
  },
}));

export const PartyShow = () => {
  const classes = useStyles();
  const location = useLocation();
  const endpoint = location.pathname.split("/").pop();
  const { socket, user } = useContext(SessionContext);
  const { push } = useHistory();
  const [step, setStep] = useState("Play");
  const [id, setId] = useState("");
  const [owner, setOwner] = useState({});
  const [createdAt, setCreatedAt] = useState({});
  const [members, setMembers] = useState([]);
  const [name, setName] = useState("");
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [trackDuration, setTrackDuration] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [trackVolume, setTrackVolume] = useState(100);

  const normalise = (value) => ((value - 1) * 100) / (trackDuration - 1);

  const convertSecondstoTime = (givenSeconds) => {
    const dateObj = new Date(givenSeconds * 1000);
    const minutes = dateObj.getUTCMinutes();
    const seconds = dateObj.getSeconds();

    const timeString =
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");

    return timeString;
  };

  const handleClick = () => {
    navigator.clipboard.writeText(id);
    success("Code de partage copié !");
  };

  const handleClickAddTrack = () => {
    push({ pathname: `${endpoint}/track/new`, state: { idParty: endpoint } });
  };

  const handleChangeVolume = (event, newValue) => {
    setTrackVolume(newValue);
  };

  const handleClickAction = async (action) => {
    console.log(action);
    if (isEmpty(currentTrack)) {
      if (tracks.length === 0) {
        fail("Ajoutez un son avant de jouer la playlist");
      } else {
        const data = await Track.next(endpoint);
        const jsonData = await data.json();

        if (data.status !== 200) throw jsonData;
      }
    } else {
      if (action === "Play") {
        await Track.play(endpoint);
      } else {
        await Track.pause(endpoint);
      }
    }
  };

  const handleClickNextTrack = async () => {
    const data = await Track.next(endpoint);
    const jsonData = await data.json();

    if (data.status !== 200) throw jsonData;

    setCurrentTrack(jsonData.currentTrack);
    setTracks(jsonData.tracks);
  };

  window.onbeforeunload = async (e) => {
    await Party.leave(endpoint);
  };

  useEffect(() => {
    const fetchData = async () => {
      await Party.join(endpoint);

      const data = await Party.show(endpoint);
      const jsonData = await data.json();

      if (data.status !== 200) throw jsonData;

      setId(jsonData._id);
      setOwner(jsonData.owner);
      setCreatedAt(jsonData.createdAt);
      setMembers(jsonData.members);
      setName(jsonData.name);
      setTracks(jsonData.tracks);
      if (jsonData.currentTrack !== undefined)
        setCurrentTrack(jsonData.currentTrack);
    };
    fetchData();
    return async () => {
      await Party.leave(endpoint);
    };
  }, [endpoint]);

  useEffect(() => {
    if (!isEmpty(socket)) {
      socket.on("party-updated", (param) => {
        switch (param.action) {
          case "add-track":
            setTracks(param.party.tracks);
            break;
          case "next-track":
            setCurrentTrack(param.party.currentTrack);
            setTracks(param.party.tracks);
            setTimeout(() => {
              setStep("Pause");
            }, 2000);
            break;
          case "vote":
            setTracks(param.party.tracks);
            break;
          case "play":
            setStep("Pause");
            break;
          case "pause":
            setStep("Play");
            break;
          case "edit":
            setName(param.party.name);
            break;
          default:
            console.log("error", param);
        }
      });
      socket.on("member-joined", (param) => {
        setMembers(param.party.members);
      });
      socket.on("member-leaved", (param) => {
        setMembers(param.party.members);
      });
      socket.on("party-deleted", () => {
        warning("La party a été supprimé");
        push(PARTYJOIN);
      });
      return () => {
        socket.off("party-updated");
        socket.off("member-joined");
        socket.off("member-leaved");
        socket.off("party-deleted");
      };
    }
  }, [socket, push]);

  return (
    <>
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
              Créée par <span className={classes.author}>{owner.email}</span> -
              le {moment(createdAt).format("DD/MM/YYYY hh:mm")}
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
      {!isEmpty(currentTrack) && (
        <section className={classes.reactPlayer}>
          <ReactPlayer
            style={{ display: "none" }}
            playing={step === "Play" ? false : true}
            volume={trackVolume / 100}
            muted={!isEmpty(owner) && user.id === owner.id ? false : true}
            onEnded={() => handleClickNextTrack()}
            onDuration={(e) => setTrackDuration(e)}
            onProgress={(e) => setTrackProgress(e.playedSeconds)}
            url={`https://www.youtube.com/watch?v=${currentTrack.id}`}
          />
          <Grid
            container
            className={
              !isEmpty(owner) && user.id === owner.id
                ? classes.player
                : classes.playerNoOwn
            }
          >
            <Grid item xs={12} sm={3} className={classes.playerInfo}>
              <img src={currentTrack.imageUrl} alt="imgUrl" />
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
                        onClick={() => [handleClickAction(step)]}
                        className={classes.iconStep}
                      />
                    ) : (
                      <PauseCircleOutlineIcon
                        onClick={() => [handleClickAction(step)]}
                        className={classes.iconStep}
                      />
                    )
                  ) : step === "Play" ? (
                    <PlayCircleOutlineIcon className={classes.iconStepNoOwn} />
                  ) : (
                    <PauseCircleOutlineIcon className={classes.iconStepNoOwn} />
                  )}
                </div>
                <div className={classes.linearProgressBlock}>
                  <span>{convertSecondstoTime(trackProgress)}</span>
                  <LinearProgress
                    variant="determinate"
                    value={normalise(trackProgress)}
                    className={classes.linearProgress}
                  />
                  <span>
                    -{convertSecondstoTime(trackDuration - trackProgress)}
                  </span>
                </div>
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
      )}
    </>
  );
};
