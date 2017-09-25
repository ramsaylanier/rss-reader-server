import Rule from '../../database/models/rule'

export default (obj, args, context, info) => {
  const {title, content, authorId} = args
  return Rule.create({
    title: title,
    content: content,
    authorId: authorId
  }).then(r => {
    console.log(r)
    return r
  })
};
