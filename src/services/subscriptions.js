import { requests } from "./requests";

export const Subscriptions = {
  mine: (owner) => requests.get(`/subscriptions?owner=${owner}`),

  new: (creditCard, subscriptionType) =>
    requests.post("/api/subscription/", { creditCard, subscriptionType }),
};
