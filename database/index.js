import mongoose from 'mongoose'
import Config from 'config'

const dbHost = Config.get('database.host')
console.log(dbHost)

const connection = mongoose.connect('mongodb://localhost/testrssschema_dev', {
  useMongoClient: true,
  promiseLibrary: global.Promise
});

export default connection
