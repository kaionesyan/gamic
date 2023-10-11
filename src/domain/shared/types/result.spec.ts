import { Result } from './result'

describe('Result', () => {
  function doSomething(isRight: boolean): Result<string, number> {
    if (isRight) return Result.ok(10)
    return Result.err('some error')
  }

  it('should return err', () => {
    const result = doSomething(false)

    expect(result.isErr).toBe(true)
    expect(result.isOk).toBe(false)
    expect(result.value).toEqual('some error')
  })

  it('should return ok', () => {
    const result = doSomething(true)

    expect(result.isErr).toBe(false)
    expect(result.isOk).toBe(true)
    expect(result.value).toEqual(10)
  })
})
