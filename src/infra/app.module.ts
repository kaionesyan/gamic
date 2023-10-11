import { Module } from '@nestjs/common'
import { EnvModule } from './config/env/env.module'
import { HttpModule } from './gateways/http/http.module'

@Module({
  imports: [EnvModule, HttpModule],
})
export class AppModule {}
