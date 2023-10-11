import { Module } from '@nestjs/common'
import { RegisterUserController } from './controllers/register-user.controller'
import { DatabaseModule } from '@/infra/database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [RegisterUserController],
})
export class UsersModule {}
