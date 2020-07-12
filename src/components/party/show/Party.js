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
import { PARTYJOIN } from "../../../helpers/route-constant";

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
      if (jsonData.currentTrack !== undefined) {
        setCurrentTrack(jsonData.currentTrack);
        if (jsonData.currentTrack.status === 1) {
          setTimeout(() => {
            setStep("Pause");
          }, 2000);
        }
      }
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
