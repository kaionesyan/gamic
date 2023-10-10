import { EntityId } from './entity-id.value-object'

describe('Entity Id Value Object', () => {
  it('should create a new random entity id', () => {
    const entityId = EntityId.create()

    expect(entityId.value).toBeTruthy()
  })
})
