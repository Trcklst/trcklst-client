import React, { useEffect, useState, useContext } from "react";
import { makeStyles, Grid, Button, withStyles } from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import { purple } from "@material-ui/core/colors";
import {
  SupervisorAccount as SupervisorAccountIcon,
  CloudUpload as CloudUploadIcon,
} from "@material-ui/icons";
import moment from "moment";

import backgroundPlaylist from "../../../images/background-playlist.jpg";
import { Party } from "../../../services/party";
import { Music } from "./Music";
import { isEmpty } from "../../../helpers/utility";
import { SessionContext } from "../../../context/session";
import { success } from "../../common/Toast";
import { Playlist } from "../../playlist/";

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
    maxWidth: 1220,
    margin: "0 auto",
    position: "relative",
    width: "100%",
    flexGrow: 1,
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
      width: 200,
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
    paddingBottom: 20,
  },
  author: {
    color: "#252525",
  },
  buttonState: {
    height: 35,
    borderRadius: 25,
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
}));

export const PartyShow = () => {
  const classes = useStyles();
  const location = useLocation();
  const endpoint = location.pathname.split("/").pop();
  const [data, setData] = useState({});
  const { user } = useContext(SessionContext);
  const { push } = useHistory();

  const handleClick = () => {
    navigator.clipboard.writeText(data._id);
    success("Code de partage copié !");
  };

  const handleClickAddTrack = () => {
    push({ pathname: `${endpoint}/track/new`, state: { idParty: endpoint } });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await Party.show(endpoint);
      const jsonData = await data.json();

      if (data.status !== 200) throw jsonData;

      setData(jsonData);
    };
    fetchData();
  }, [endpoint]);

  return (
    !isEmpty(data) && (
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
              <h3 className={classes.title}>{data.name}</h3>
              <p className={classes.createdBy}>
                Créée par{" "}
                <span className={classes.author}>{data.owner.email}</span> - le{" "}
                {moment(data.createdAt).format("DD/MM/YYYY hh:mm")}
              </p>
              {user.id === data.owner.id && (
                <ColorButton
                  variant="contained"
                  color="primary"
                  className={classes.buttonState}
                  onClick={() => handleClick()}
                >
                  {`code : ${data._id}`}
                </ColorButton>
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
            <p>{data.members.length} personnes participes</p>
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
            {data.tracks.map((value, index) => {
              return (
                <Music key={index} icon={value.imageUrl} title={value.name} />
              );
            })}
          </>
        </section>
        <Playlist tracks={data.tracks} />
      </>
    )
  );
};
