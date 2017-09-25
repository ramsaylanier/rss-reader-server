import Game from '../../database/models/game'

export default (obj, args, context, info) => {
  const {title} = args
  return Game.create({
    title: title,
  }).then(r => {
    console.log(r)
    return r
  })
};
