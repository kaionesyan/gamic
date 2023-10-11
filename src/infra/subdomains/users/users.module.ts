import { Module } from '@nestjs/common'
import { RegisterUserController } from './controllers/register-user.controller'

@Module({
  controllers: [RegisterUserController],
})
export class UsersModule {}
