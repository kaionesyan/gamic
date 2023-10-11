import { HashService } from '@/domain/shared/services/hash/hash.service'

export class FakeHashService implements HashService {
  hash(plain: string): string {
    return plain.concat('-hashed')
  }

  compare(plain: string, hashed: string): boolean {
    return plain.concat('-hashed') === hashed
  }
}
