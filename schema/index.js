const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
const resolvers = require('../resolvers');

const typeDefs = `
  type Game {
    id: String!
    title: String!
  }

  type Rule {
    id: String!
    title: String!
    content: String!
    authorId: String!
    game: [Game]
  }

  type Query {
    rules: [Rule]
    games: [Game]
  }

  type Mutation {
    createRule(title: String!, content: String!, authorId: Int!): Rule
    createGame(title: String!): Game
  }
`;

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
