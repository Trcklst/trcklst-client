import { requests } from "./requests";

export const Auth = {
  login: (email, password) => requests.post("/login", { email, password }),
  register: (email, password, lastname, firstname) =>
    requests.post("/register", { email, password, lastname, firstname }),
};
