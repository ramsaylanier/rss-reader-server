import Rule from '../../database/models/rule'

export default function () {
  return Rule.findAll()
}
