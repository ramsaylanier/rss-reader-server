import mongoose from 'mongoose'
const connection = mongoose.connect('mongodb://localhost/testrssschema_dev', {
  useMongoClient: true,
  promiseLibrary: global.Promise 
});

export default connection
