import React from "react";
import { useHistory } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";
import SettingsInputAntennaIcon from "@material-ui/icons/SettingsInputAntenna";

import { NOTFOUND } from "../../helpers/route-constant";
import reconnectImg from "../../images/reconnect.svg";

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
    "& > p": {
      fontSize: 18,
      marginTop: 8,
      marginBottom: 8,
      textAlign: "center",
    },
  },
  img: {
    maxWidth: 650,
    width: "100%",
    marginBottom: 35,
  },
  button: {
    marginTop: 35,
  },
});

export const PartyUnauthorized = (props) => {
  const classes = useStyles();
  const { push } = useHistory();

  if (props.location.state !== undefined) {
    const { idParty } = props.location.state;

    const handleClick = () => {
      push(`/party/${idParty}`);
    };

    return (
      <div className={classes.root}>
        <img className={classes.img} src={reconnectImg} alt="reconnect" />
        <p>Vous avez perdu la connexion à la party.</p>
        <p>
          Vous pouvez vous <b>reconnecter</b> en cliquant ci-dessous.
        </p>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SettingsInputAntennaIcon />}
          onClick={() => handleClick()}
        >
          Reconnexion à la party
        </Button>
      </div>
    );
  } else {
    push(NOTFOUND);
  }
};
