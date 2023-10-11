import { GamerTag } from './gamer-tag.value-object'

describe('Gamer Tag Value Object', () => {
  it('should create a valid gamer tag from a string', () => {
    const value = 'kaionesyan'

    const gamerTag = GamerTag.create(value)

    expect(gamerTag.value).toBe(value)
  })
})
