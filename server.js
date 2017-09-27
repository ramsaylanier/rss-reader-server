import express from 'express';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';
import {formatError} from 'apollo-errors';
import bodyParser from 'body-parser';
import graphQLSchema from './schema';
import cors from 'cors';
import database from './database'

const PORT = 4000;
const app = express();
const whitelist = ['http://localhost:19002'];
const corsOptions = {
  origin: function(origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true,
};
app.use(cors());

// prettier-ignore
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(request => {
    return ({
      schema: graphQLSchema
    })
  })
);

// prettier-ignore
app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  })
);

app.listen(PORT, (err, res) => {
  database.then(db => {
    console.log(db)
  })
});
