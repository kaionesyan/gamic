import { Controller, Post } from '@nestjs/common'

@Controller('/users')
export class RegisterUserController {
  @Post()
  async execute(): Promise<string> {
    return 'Hello World'
  }
}
