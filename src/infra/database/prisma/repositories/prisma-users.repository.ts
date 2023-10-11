import { UsersRepository } from '@/domain/users/repositories/users/users.repository'
import { Injectable } from '@nestjs/common'
import { PrismaDatabaseService } from '../prisma.service'
import { User } from '@/domain/users/entities/user.entity'
import { GamerTag } from '@/domain/users/entities/gamer-tag.value-object'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(prismaService: PrismaDatabaseService) {
    this.client = prismaService.client
  }

  private client: PrismaClient

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.client.user.findUnique({
      where: { email },
    })

    if (!user) return null

    return User.create({
      email: user.email,
      passwordHash: user.passwordHash,
      gamerTag: GamerTag.create(user.gamerTag),
    })
  }

  async findByGamerTag(gamerTag: string): Promise<User | null> {
    const user = await this.client.user.findUnique({
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
    await this.client.user.create({
      data: {
        id: user.id.value,
        email: user.email,
        passwordHash: user.passwordHash,
        gamerTag: user.gamerTag.value,
      },
    })
  }
}
