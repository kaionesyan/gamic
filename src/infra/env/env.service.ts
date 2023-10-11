import { Injectable } from '@nestjs/common'
import { ConfigService, PathValue } from '@nestjs/config'
import { Env } from './env'

@Injectable()
export class EnvService {
  constructor(private configService: ConfigService<Env, true>) {}

  get<T extends keyof Env>(key: T): PathValue<Env, T> {
    return this.configService.get(key, { infer: true })
  }
}
