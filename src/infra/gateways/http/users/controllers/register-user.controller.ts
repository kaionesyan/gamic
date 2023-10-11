import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Post,
} from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '../../shared/pipes/zod-validation.pipe'
import { RegisterUserUseCase } from '@/domain/users/use-cases/register-user.use-case'
import { DomainErrorCode } from '@/domain/shared/errors/domain.error'

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
  gamerTag: z.string().regex(/^[a-zA-Z]{4,12}$/i),
})

type BodySchema = z.infer<typeof bodySchema>

@Controller('/users')
export class RegisterUserController {
  constructor(private registerUser: RegisterUserUseCase) {}

  @Post()
  async execute(
    @Body(new ZodValidationPipe(bodySchema)) body: BodySchema,
  ): Promise<any> {
    const { email, password, gamerTag } = body

    const result = await this.registerUser.execute({
      email,
      password,
      gamerTag,
    })

    if (result.isErr) {
      const error = result.value

      switch (error.code) {
        case DomainErrorCode.EmailInUse:
        case DomainErrorCode.GamerTagInUse:
          throw new ConflictException(error.message)

        default:
          throw new BadRequestException(error.message)
      }
    }

    return { user: result.value.user }
  }
}
