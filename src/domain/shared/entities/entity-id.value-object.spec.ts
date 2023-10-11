import { EntityId } from './entity-id.value-object'

describe('Entity Id Value Object', () => {
  it('should create a new random entity id', () => {
    const entityId = EntityId.create()

    expect(entityId.value).toBeTruthy()
  })

  it('should create a valid entity id from a string', () => {
    const idString = 'c5f5fc8c-7276-4e7d-a8a3-e9ba9ff7b6db'

    const entityId = EntityId.create(idString)

    expect(entityId.value).toBe(idString)
  })

  it('should throw when creating an entity id from an invalid string', () => {
    expect(() => EntityId.create('invalid id')).toThrowError('Invalid UUID')
  })

  it('should correctly compare identical entity ids', () => {
    const idString = 'c5f5fc8c-7276-4e7d-a8a3-e9ba9ff7b6db'

    const entityId1 = EntityId.create(idString)
    const entityId2 = EntityId.create(idString)

    expect(entityId1.equals(entityId2)).toBe(true)
  })

  it('should correctly compare unequal entity ids', () => {
    const entityId1 = EntityId.create('c5f5fc8c-7276-4e7d-a8a3-e9ba9ff7b6db')
    const entityId2 = EntityId.create('46877764-b5d3-41ab-9ff5-aae1951963b8')

    expect(entityId1.equals(entityId2)).toBe(false)
  })
})
