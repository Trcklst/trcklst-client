import { requests } from "./requests";

export const Party = {
  new: (name) => requests.post("/party", { name }),
  get: () => requests.get(`/party`),
  show: (party) => requests.get(`/party/${party}`),
  edit: (party, name) => requests.put(`/party/${party}`, { name }),
  join: (party) => requests.patch(`/party/${party}/join`),
  delete: (party) => requests.delete(`/party/${party}`),
  leave: (party) => requests.patch(`/party/${party}/leave`),
};
