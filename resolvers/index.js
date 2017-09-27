import getFeeds from './feed/get'
import getFeed from './feed/getOne'
import createFeed from './feed/create'

const resolvers = {
  Query: {
    feeds: (obj) => {
      return getFeeds();
    },
    feed: (obj, {id}) => {
      return getFeed(id);
    }
  },
  Mutation: {
    createFeed
  },
};

module.exports = resolvers;
