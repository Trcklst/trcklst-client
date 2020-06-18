import { requests } from "./requests";

export const Party = {
  new: (name) => requests.post("/party", { name }),
};
