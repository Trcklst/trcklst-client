import { requests } from "./requests";

export const Auth = {
  login: (email, password) =>
    requests.auth(
      `/oauth/token?password=${password}&username=${email}&grant_type=password`
    ),
  register: (email, password) =>
    requests.post("/api/register", { username: email, password }),
};
