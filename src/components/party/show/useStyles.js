import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
    marginTop: 20,
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
    marginTop: 10,
  },
  headPlaylist: {
    color: "#c3c3c3",
    textTransform: "uppercase",
    fontSize: 14,
    borderBottom: "1px solid #f5f5f5",
  },
  peopleBlock: {
    display: "flex",
    justifyContent: "center",
    padding: 20,
  },
  people: {
    color: "#40eadb",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      color: "#1eccbc",
    },
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
  modal: {
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fefefe",
    width: 640,
  },
  close: {
    color: "#aaa",
    float: "right",
    fontSize: 28,
    fontWeight: "bold",
    "&:hover": {
      color: "black",
      textDecoration: "none",
      cursor: "pointer",
    },
  },
  imageUrl: {
    cursor: "pointer",
    position: "relative",
    width: 300,
    "& > img": {
      height: "100%",
      width: "100%",
    },
  },
  videoIconBlock: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.6)",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,.4)",
    },
  },
  videoIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    "& > svg": {
      fontSize: 35,
    },
  },
  avatar: {
    color: "#727272",
    backgroundColor: "#e4e4e4",
  },
}));
