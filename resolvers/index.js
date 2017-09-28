import getFeeds from './feed/get'
import getFeed from './feed/getOne'
import createFeed from './feed/create'
import deleteFeed from './feed/delete'

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
    createFeed,
    deleteFeed
  },
};

module.exports = resolvers;
