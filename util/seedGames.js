import cheerio from 'cheerio'
import request from 'request'
import createGame from '../resolvers/game/createGame'

export default function () {
  let index = 0
  while (index < 10) {
    index++
    request(`https://boardgamegeek.com/browse/boardgame/page/${index}`, (err, res, html) => {
      if (!err && res.statusCode === 200) {
        const $ = cheerio.load(html)
        const scrapedGames = $('.collection_objectname').find('a')
        scrapedGames.each((i, game) => {
          const title = $(game).text()
          let newGame = {
            title: title
          }

          createGame(null, {title: title})
        })
      }
    })
  }
}
