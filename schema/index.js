const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
const resolvers = require('../resolvers');

const typeDefs = `
  type Feed {
    id: String!
    url: String
    description: String
    language: String
    items: [FeedItem]
    title: String
    updatedAt: String
  }

  type FeedItem {
    title: String
    contributor: String
    publisher: String
    subject: [String]
    link: String
    description: String
  }

  type Query {
    feeds: [Feed]
    feed (id: String!): Feed
  }

  type Mutation {
    createFeed(url: String!): Feed
    deleteFeed(id: String!): String
  }
`;

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
