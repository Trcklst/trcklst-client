import { Ability, AbilityBuilder } from "@casl/ability";

export const subjectName = (item) => {
  if (!item || typeof item === "string") {
    return item;
  }
  return item.__type;
};

export const ability = new Ability([], { subjectName });

export const defineRulesFor = (user) => {
  const { can, rules } = new AbilityBuilder();

  switch (user.role) {
    case "ROLE_ADMIN":
      can("view", "DashboardAdmin", { userId: user.id });
      can("view", "Users", { userId: user.id });
      can("view", "AccountAdmin", { userId: user.id });
      break;
    case "ROLE_USER":
      can("view", "DashboardUser", { userId: user.id });
      can("view", "AccountUser", { userId: user.id });
      can("add", "Party", { userId: user.id });
      can("view", "MySubscriptions", { userId: user.id });
      can("view", "NewSubscription", { userId: user.id });
      can("view", "MyParties", { userId: user.id });
      can("show", "Party", { userId: user.id });
      can("edit", "Party", { userId: user.id });
      can("join", "Party", { userId: user.id });
      can("view", "PartyUnauthorized", { userId: user.id });
      break;
    default:
      break;
  }
  return rules;
};
