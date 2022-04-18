import {
  GraphQLString,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
} from "graphql";

import { accounts, contacts } from "../data/index.js";

const AddressType = new GraphQLObjectType({
  name: "Address",
  fields: () => ({
    city: { type: GraphQLString },
    country: { type: GraphQLString },
    geocodeAccuracy: { type: GraphQLString },
    latitude: { type: GraphQLFloat },
    longitude: { type: GraphQLFloat },
    postalCode: { type: GraphQLString },
    state: { type: GraphQLString },
    street: { type: GraphQLString },
  }),
});

export const AccountType = new GraphQLObjectType({
  name: "Account",
  fields: () => ({
    Id: { type: GraphQLString },
    Name: { type: GraphQLString },
    AccountNumber: { type: GraphQLString },
    Type: { type: GraphQLString },
    BillingAddress: { type: AddressType },
    Contacts: {
      type: new GraphQLNonNull(new GraphQLList(ContactType)),
      resolve: (parent, args) =>
        contacts.filter(({ AccountId }) => AccountId === parent.Id),
    },
  }),
});

export const ContactType = new GraphQLObjectType({
  name: "Contact",
  fields: () => ({
    Id: { type: GraphQLString },
    FirstName: { type: GraphQLString },
    LastName: { type: GraphQLString },
    Title: { type: GraphQLString },
    Email: { type: GraphQLString },
    MailingAddress: { type: AddressType },
    AccountId: { type: GraphQLString },
    Account: {
      type: AccountType,
      resolve: (parent, args) =>
        accounts.find((account) => account.Id === parent.AccountId),
    },
  }),
});

export const OpportunityType = new GraphQLObjectType({
  name: "Opportunity",
  fields: () => ({
    Id: { type: GraphQLString },
    Name: { type: GraphQLString },
    Type: { type: GraphQLString },
    CloseDate: { type: GraphQLString },
    StageName: { type: GraphQLString },
    Probability: { type: GraphQLInt },
    Amount: { type: GraphQLFloat },
    ExpectedRevenue: { type: GraphQLFloat },
    AccountId: { type: GraphQLString },
    Account: {
      type: AccountType,
      resolve: (parent, args) =>
        accounts.find((account) => account.Id === parent.AccountId),
    },
  }),
});
