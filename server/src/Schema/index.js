const { GraphQLObjectType, GraphQLSchema } = require("graphql");

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {},
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {},
});
const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

module.exports = schema;
