# rss-reader-server

The backend that is required to be running in conjunction with [RSS Reader Client](https://github.com/ramsaylanier/rss-reader-client).
Make sure this is running before running the client.

The backend uses MongoDB as a data store and GraphQL to manage queries/mutations. 


## Getting Started

`yarn install` or `npm install`

### Install Mongo

This application uses Mongo for its data store. Ensure mongo is installed. [Here Is A Guide.](https://docs.mongodb.com/manual/installation/)

### Modify developent.json config

After mongo is installed, update `config/development.json` to point at the local mongo database you want to use.

### Install Nodemon
`npm install -g nodemon` to ensure that whenever a file is changed on the server, the server restarts. 

## Staring The Dev Server
`npm run start`
