import {Feed} from '../../database/schema/feed'

export default function (id) {
  return Feed.findOne({
    _id: id
  }).then(r => {
    console.log(r)
    return r
  })
}
