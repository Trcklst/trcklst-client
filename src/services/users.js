import { requests } from "./requests";

export const Users = {
  list: () => requests.get(`/users`),
  remove: (id) => requests.delete(`/users/${id}`),
};
