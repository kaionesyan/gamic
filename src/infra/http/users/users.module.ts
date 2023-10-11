import { Module } from '@nestjs/common'
import { RegisterUserController } from './controllers/register-user.controller'
import { DatabaseModule } from '@/infra/database/database.module'
import { RegisterUserUseCase } from '@/domain/users/use-cases/register-user.use-case'
import { HashModule } from '@/infra/hash/hash.module'

@Module({
  imports: [DatabaseModule, HashModule],
  controllers: [RegisterUserController],
  providers: [RegisterUserUseCase],
})
export class UsersModule {}
