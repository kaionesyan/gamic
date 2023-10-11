import { GamerTag } from './gamer-tag.value-object'

describe('Gamer Tag Value Object', () => {
  it('should create a valid gamer tag from a string', () => {
    const value = 'kaionesyan'

    const gamerTag = GamerTag.create(value)

    expect(gamerTag.value).toBe(value)
  })

  it('should throw when creating gamer tags from invalid strings', () => {
    const gamerTagWithNonAlphaNumericCharacters = 'k@ionesyan'
    const gamerTagWithLessThanFourCharacters = 'ka'
    const gamerTagWithMoreThanTwelveCharacters = 'kowisannoying'

    expect(() =>
      GamerTag.create(gamerTagWithNonAlphaNumericCharacters),
    ).toThrowError('Invalid Gamer Tag')

    expect(() =>
      GamerTag.create(gamerTagWithLessThanFourCharacters),
    ).toThrowError('Invalid Gamer Tag')

    expect(() =>
      GamerTag.create(gamerTagWithMoreThanTwelveCharacters),
    ).toThrowError('Invalid Gamer Tag')
  })

  it('should correctly compare identical gamer tags', () => {
    const value = 'kaionesyan'

    const gamerTag1 = GamerTag.create(value)
    const gamerTag2 = GamerTag.create(value)

    expect(gamerTag1.equals(gamerTag2)).toBe(true)
  })

  it('should correctly compare unequal gamer tags', () => {
    const gamerTag1 = GamerTag.create('kaionesyan')
    const gamerTag2 = GamerTag.create('reisbro')

    expect(gamerTag1.equals(gamerTag2)).toBe(false)
  })
})
