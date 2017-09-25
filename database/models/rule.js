import sequelize from '../index.js'
import Sequelize from 'sequelize'
import Game from './game'

const Rule = sequelize.define('rule', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.TEXT,
  },
  content: {
    type: Sequelize.TEXT
  },
  authorId: {
    type: Sequelize.INTEGER
  },
})

Rule.belongsTo(Game)

export default Rule
