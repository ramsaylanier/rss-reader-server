import createRule from './rule/createRule';
import getRules from './rule/getRules';
import createGame from './game/createGame';
import getGames from './game/getGames';

const resolvers = {
  Query: {
    rules: (obj, {authorId}) => {
      return getRules();
    },
    games: (obj) => {
      return getGames();
    }
  },
  Mutation: {
    createRule: createRule,
    createGame: createGame
  },
};

module.exports = resolvers;
