import { requests } from "./requests";

export const Party = {
  new: (name) => requests.post("/party", { name }),
  get: () => requests.get(`/party`),
  show: (party) => requests.get(`/party/${party}`),
};
