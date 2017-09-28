import {Feed} from '../../database/schema/feed'

export default function (obj, {id}) {
  return Feed.remove({_id: id}).then(r => {
    return id
  })
}
