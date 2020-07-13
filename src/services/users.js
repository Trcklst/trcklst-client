import { requests } from "./requests";

export const Users = {
  list: () => requests.get(`/api/admin/users/`),
  remove: (id) => requests.delete(`/api/admin/users/${id}`),
};
