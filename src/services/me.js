import { requests } from "./requests";

export const Me = {
  resetPassword: (newPassword, oldPassword) =>
    requests.patch("/api/password/update/", { oldPassword, newPassword }),
};
