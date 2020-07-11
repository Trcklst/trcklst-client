import { requests } from "./requests";

export const Track = {
  search: (title) =>
    requests.post("/api/youtube/search", { query: title, itemsNumber: "10" }),
  add: (idParty, id, name, imageUrl) =>
    requests.post(`/party/${idParty}/add-track`, { id, name, imageUrl }),
  next: (idParty) => requests.put(`/party/${idParty}/next-track`),
  play: (idParty) => requests.patch(`/party/${idParty}/play`),
  pause: (idParty) => requests.patch(`/party/${idParty}/pause`),
  vote: (idParty, idTrack) =>
    requests.patch(`/party/${idParty}/vote-track/${idTrack}`),
  unvote: (idParty, idTrack) =>
    requests.patch(`/party/${idParty}/unvote-track/${idTrack}`),
};
