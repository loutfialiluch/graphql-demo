import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import { AccountType, ContactType, OpportunityType } from "./types.js";
import {
  accountResolver,
  accountsResolver,
  contactResolver,
  contactsResolver,
  opportunitiesResolver,
  opportunityResolver,
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
        id: { type: new GraphQLNonNull(GraphQLString) },
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
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: contactResolver,
    },
    Opportunities: {
      type: new GraphQLList(OpportunityType),
      resolve: opportunitiesResolver,
    },
    Opportunity: {
      type: OpportunityType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: opportunityResolver,
    },
  },
});

export default new GraphQLSchema({
  query: RootQueryType,
});
