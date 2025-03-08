import event from './event'
import venue from './venue'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([event, venue]),
})
