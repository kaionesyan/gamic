import { Module } from '@nestjs/common'
import { RegisterUserController } from './controllers/register-user.controller'
import { RegisterUserUseCase } from '@/domain/users/use-cases/register-user.use-case'
import { HashModule } from '@/infra/domain-services/hash/hash.module'
import { DatabaseModule } from '@/infra/domain-services/database/database.module'

@Module({
  imports: [DatabaseModule, HashModule],
  controllers: [RegisterUserController],
  providers: [RegisterUserUseCase],
})
export class UsersModule {}
