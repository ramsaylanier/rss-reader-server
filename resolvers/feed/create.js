import {Feed} from '../../database/schema/feed'
import request from 'request-promise'
import {parseString} from 'xml2js'

export default (obj, args, context, info) => {
  const {url} = args

  return request(url).then(xml => {

    let feedData = {}

    parseString(xml, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        const {channel} = res.rss
        const {item: items, description, language, title, pubDate} = channel[0]

        const shapedItems = items.map( item => {
          return {
            title: item.title[0],
            description: item.description[0],
            link: item.link[0],
            publisher: item['dc:publisher'],
            contributor: item['dc:contributor'],
            subject: item['dc:subject']
          }
        })

        feedData = {
          url: url,
          title: title[0],
          language: language[0],
          description: description[0],
          updatedAt: new Date(),
          items: shapedItems
        }
      }
    })

    return Feed.create(feedData).then(r => {
      return r
    }).catch(err => {
      console.log(err)
    })


  })
};
