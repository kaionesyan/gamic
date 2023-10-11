import { DomainError } from '@/domain/shared/errors/domain.error'
import { Result } from '@/domain/shared/types/result'
import { User } from '../entities/user.entity'
import { HashService } from '@/domain/shared/services/hash/hash.service'
import { UsersRepository } from '../repositories/users/users.repository'
import { GamerTag } from '../entities/gamer-tag.value-object'
import { Injectable } from '@nestjs/common'

type Request = {
  email: string
  password: string
  gamerTag: string
}

type Response = Result<DomainError, { user: User }>

@Injectable()
export class RegisterUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private hashService: HashService,
  ) {}

  async execute(data: Request): Promise<Response> {
    const { email, password, gamerTag } = data

    const emailInUse = await this.usersRepository.findByEmail(email)

    if (emailInUse) {
      return Result.err(DomainError.emailInUse(email))
    }

    const gamerTagInUse = await this.usersRepository.findByGamerTag(gamerTag)

    if (gamerTagInUse) {
      return Result.err(DomainError.gamerTagInUse(gamerTag))
    }

    const user = User.create({
      email,
      passwordHash: this.hashService.hash(password),
      gamerTag: GamerTag.create(gamerTag),
    })

    await this.usersRepository.create(user)

    return Result.ok({ user })
  }
}
