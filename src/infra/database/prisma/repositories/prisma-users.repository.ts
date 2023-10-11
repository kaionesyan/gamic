import { UsersRepository } from '@/domain/users/repositories/users/users.repository'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { User } from '@/domain/users/entities/user.entity'
import { GamerTag } from '@/domain/users/entities/gamer-tag.value-object'

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prismaService: PrismaService) {}

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({ where: { email } })

    if (!user) return null

    return User.create({
      email: user.email,
      passwordHash: user.passwordHash,
      gamerTag: GamerTag.create(user.gamerTag),
    })
  }

  async findByGamerTag(gamerTag: string): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({
      where: { gamerTag },
    })

    if (!user) return null

    return User.create({
      email: user.email,
      passwordHash: user.passwordHash,
      gamerTag: GamerTag.create(user.gamerTag),
    })
  }

  async create(user: User): Promise<void> {
    await this.prismaService.user.create({
      data: {
        id: user.id.value,
        email: user.email,
        passwordHash: user.passwordHash,
        gamerTag: user.gamerTag.value,
      },
    })
  }
}
