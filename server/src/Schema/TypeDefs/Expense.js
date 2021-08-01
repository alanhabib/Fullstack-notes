const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require("graphql");

export const ExpenseType = new GraphQLObjectType({
  name: "Expense",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    amount: { type: GraphQLInt },
  }),
});
