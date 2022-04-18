import {
  GraphQLString,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
} from "graphql";

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
    Account: { type: AccountType },
  }),
});
