import { requests } from "./requests";

export const Track = {
  search: (title) =>
    requests.post("/api/youtube/search", { query: title, itemsNumber: "10" }),
  add: (idParty, id, name, imageUrl) =>
    requests.post(`/party/${idParty}/add-track`, { id, name, imageUrl }),
};
