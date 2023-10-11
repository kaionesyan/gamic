import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { EnvService } from './env/env.service'

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule)

  const port = app.get(EnvService).get('PORT')

  await app.listen(port)
}

bootstrap()
