import sequelize from '../index.js'
import Sequelize from 'sequelize'

const Game = sequelize.define('game', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.TEXT,
  }
})

export default Game
