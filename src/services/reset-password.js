import { requests } from "./requests";

export const ResetPassword = {
  sendmail: (email) =>
    requests.post("/api/forget-password/send/", { email })
};
