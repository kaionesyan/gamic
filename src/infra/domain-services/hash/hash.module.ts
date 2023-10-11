import { HashService } from '@/domain/shared/services/hash/hash.service'
import { Module } from '@nestjs/common'
import { BcryptHashService } from './bcrypt/bcrypt-hash.service'

@Module({
  providers: [
    {
      provide: HashService,
      useClass: BcryptHashService,
    },
  ],
  exports: [HashService],
})
export class HashModule {}
