import { requests } from "./requests";

export const Party = {
  new: (name, owner) => requests.post("/party", { name, owner }),
  mine: (owner) => requests.get(`/party?owner=${owner}`),
  external: (user) => requests.get(`/relations?idUser=${user}`),
  show: (party) => requests.get(`/party?id=${party}`),
};
