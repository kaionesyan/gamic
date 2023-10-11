import { HashService } from '@/domain/shared/services/hash/hash.service'
import { compareSync, hashSync } from 'bcryptjs'

export class BcryptHashService implements HashService {
  hash(plain: string): string {
    return hashSync(plain, 8)
  }

  compare(plain: string, hashed: string): boolean {
    return compareSync(plain, hashed)
  }
}
