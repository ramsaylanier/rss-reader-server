import mongoose from 'mongoose'

var Schema = mongoose.Schema;

const FeedSchema = new Schema({
  url:  String,
  description: String,
  language: String,
  title: String,
  updatedAt: Date,
  items: Array
});

const Feed = mongoose.model('Feed', FeedSchema)

export {
  FeedSchema,
  Feed
}
