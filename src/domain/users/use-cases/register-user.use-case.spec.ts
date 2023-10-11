import { FakeUsersRepository } from '@test/repositories/fake-users.repository'
import { FakeHashService } from '@test/services/fake-hash.service'
import { RegisterUserUseCase } from './register-user.use-case'
import { GamerTag } from '../entities/gamer-tag.value-object'

describe('Register User Use Case', () => {
  let usersRepository: FakeUsersRepository
  let hashService: FakeHashService
  let sut: RegisterUserUseCase

  beforeEach(() => {
    usersRepository = new FakeUsersRepository()
    hashService = new FakeHashService()
    sut = new RegisterUserUseCase(usersRepository, hashService)
  })

  it('should be able to register the user', async () => {
    const result = await sut.execute({
      email: 'john@doe.com',
      password: '123',
      gamerTag: 'johndoe',
    })

    expect(result.isOk).toBe(true)
    assert(result.isOk)
    expect(result.value.user).toEqual(
      expect.objectContaining({
        email: 'john@doe.com',
        passwordHash: '123-hashed',
        gamerTag: GamerTag.create('johndoe'),
      }),
    )
  })
})
