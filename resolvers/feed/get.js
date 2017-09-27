import {Feed} from '../../database/schema/feed'

export default function () {
  return Feed.find({}).exec()
}
