import { accounts, contacts, opportunities } from "../data/index.js";

export const accountsResolver = () => accounts;

export const accountResolver = (_, args) =>
  accounts.find(({ Id }) => Id === args.id);

export const contactsResolver = () => contacts;

export const contactResolver = (_, args) =>
  contacts.find(({ Id }) => Id === args.id);

export const opportunitiesResolver = (_, args) => opportunities;

export const opportunityResolver = (_, args) =>
  opportunities.find(({ Id }) => Id === args.id);
