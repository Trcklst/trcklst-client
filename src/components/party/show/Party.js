import React, { useEffect, useState, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { Playlist } from "./playlist/";
import { TrackNew } from "./add-track/Track";
import { PlayerIndex } from "./player/";
import { Party } from "../../../services/party";
import { Track } from "../../../services/track";
import { SessionContext } from "../../../context/session";
import { fail, warning } from "../../common/Toast";
import { isEmpty } from "../../../helpers/utility";
import { PARTYJOIN, PARTYUNAUTHORIZED } from "../../../helpers/route-constant";

export const PartyShow = () => {
  const location = useLocation();
  const endpoint = location.pathname.split("/").pop();
  const { socket, user } = useContext(SessionContext);
  const { push } = useHistory();
  const [view, setView] = useState("playlist");
  const [step, setStep] = useState("Play");
  const [id, setId] = useState("");
  const [owner, setOwner] = useState({});
  const [createdAt, setCreatedAt] = useState({});
  const [members, setMembers] = useState([]);
  const [name, setName] = useState("");
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});

  const handleClickAddTrack = () => {
    setView("add-track");
  };

  const handleClickAction = async (action) => {
    if (isEmpty(currentTrack)) {
      if (tracks.length === 0) {
        fail("Ajoutez un son avant de jouer la playlist");
      } else {
        try {
          const data = await Track.next(endpoint);
          const jsonData = await data.json();

          if (data.status !== 200) throw jsonData;
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      if (action === "Play") {
        try {
          const data = await Track.play(endpoint);

          if (data.status !== 204) throw data;
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          const data = await Track.pause(endpoint);

          if (data.status !== 204) throw data;
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  const handleClickNextTrack = async () => {
    try {
      const data = await Track.next(endpoint);
      const jsonData = await data.json();

      if (data.status !== 200) throw jsonData;

      setCurrentTrack(jsonData.currentTrack);
      setTracks(jsonData.tracks);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataJoin = await Party.join(endpoint);
        const jsonDataJoin = await dataJoin.json();

        if (dataJoin.status !== 200) throw jsonDataJoin;

        const data = await Party.show(endpoint);
        const jsonData = await data.json();

        if (data.status !== 200) throw jsonData;

        setId(jsonData._id);
        setOwner(jsonData.owner);
        setCreatedAt(jsonData.createdAt);
        setMembers(jsonData.members);
        setName(jsonData.name);
        setTracks(jsonData.tracks);

        if (jsonData.currentTrack !== undefined) {
          setCurrentTrack(jsonData.currentTrack);
          if (jsonData.currentTrack.status === 1) {
            setTimeout(() => {
              setStep("Pause");
            }, 2000);
          }
        }
      } catch (err) {
        if (err.message === "Vous êtes déjà présent dans la fête") {
          push({
            pathname: PARTYUNAUTHORIZED,
            state: { idParty: endpoint },
          });
        } else if (
          err.message ===
            "Le compte du créateur de la playlist est limité à 10 participants" ||
          err.message ===
            "Le compte du créateur de la playlist est limité à 25 participants"
        ) {
          fail(err.message);
          push(PARTYJOIN);
        } else {
          fail(err.message);
        }
      }
    };
    fetchData();
    return async () => {
      await Party.leave(endpoint);
    };
  }, [endpoint, push, socket]);

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
          case "unvote":
            setTracks(param.party.tracks);
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
      socket.on("member-leaved", async (param) => {
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
      {view === "playlist" ? (
        <Playlist
          id={id}
          name={name}
          createdAt={createdAt}
          owner={owner}
          user={user}
          step={step}
          endpoint={endpoint}
          members={members}
          handleClickAction={handleClickAction}
          handleClickAddTrack={handleClickAddTrack}
          tracks={tracks}
        />
      ) : (
        <TrackNew idParty={endpoint} setView={setView} />
      )}
      {!isEmpty(currentTrack) && (
        <PlayerIndex
          owner={owner}
          user={user}
          step={step}
          currentTrack={currentTrack}
          handleClickNextTrack={handleClickNextTrack}
          handleClickAction={handleClickAction}
        />
      )}
    </>
  );
};
