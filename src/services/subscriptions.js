import { requests } from "./requests";

export const Subscriptions = {
  mine: () => requests.get(`/api/subscription/billing/`),
  new: (creditCard, subscriptionType) =>
    requests.post("/api/subscription/", { creditCard, subscriptionType }),
};
