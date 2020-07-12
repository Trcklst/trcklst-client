import { requests } from "./requests";

export const ResetPassword = {
  sendmail: (email) => requests.post("/api/forget-password/send/", { email }),
  reset: (token, newPassword) =>
    requests.post("/api/forget-password/reset/", { token, newPassword }),
};
