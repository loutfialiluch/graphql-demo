import { accounts, contacts, opportunities } from "../data/index.js";

export const accountsResolver = () =>
  accounts.map((account) => ({
    ...account,
    Contacts: contacts.filter(({ AccountId }) => AccountId === account.Id),
  }));

export const accountResolver = (_, args) => {
  const account = accounts.find(({ Id }) => Id === args.id);
  const accountContacts = contacts.filter(
    ({ AccountId }) => AccountId === args.id
  );
  account.Contacts = accountContacts;
  return account;
};

export const contactsResolver = () =>
  contacts.map((contact) => ({
    ...contact,
    Account: accounts.find(({ Id }) => Id === contact.AccountId),
  }));

export const contactResolver = (_, args) => {
  const contact = contacts.find(({ Id }) => Id === args.id);
  const contactAccount = accounts.find(({ Id }) => Id === contact.AccountId);
  contact.Account = contactAccount;
  return contact;
};
