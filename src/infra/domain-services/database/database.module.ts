import { Module } from '@nestjs/common'
import { PrismaDatabaseService } from './prisma/prisma.service'
import { UsersRepository } from '@/domain/users/repositories/users/users.repository'
import { PrismaUsersRepository } from './prisma/repositories/prisma-users.repository'
import { DatabaseService } from '@/domain/shared/services/database/database.service'

@Module({
  providers: [
    {
      provide: DatabaseService,
      useClass: PrismaDatabaseService,
    },
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
  ],
  exports: [DatabaseService, UsersRepository],
})
export class DatabaseModule {}
