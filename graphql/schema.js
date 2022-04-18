import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import { AccountType, ContactType } from "./types.js";
import {
  accountResolver,
  accountsResolver,
  contactResolver,
  contactsResolver,
} from "./resolvers.js";

const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    Accounts: {
      type: new GraphQLList(AccountType),
      resolve: accountsResolver,
    },
    Account: {
      type: AccountType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: accountResolver,
    },
    Contacts: {
      type: new GraphQLList(ContactType),
      resolve: contactsResolver,
    },
    Contact: {
      type: ContactType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: contactResolver,
    },
  },
});

export default new GraphQLSchema({
  query: RootQueryType,
});
