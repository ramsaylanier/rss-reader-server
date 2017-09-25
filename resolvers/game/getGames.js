import Game from '../../database/models/game'

export default function () {
  return Game.findAll()
}
