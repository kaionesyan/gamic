import { User } from '../../entities/user.entity'

export abstract class UsersRepository {
  abstract findByEmail(email: string): Promise<User | null>
  abstract findByGamerTag(gamerTag: string): Promise<User | null>
  abstract create(user: User): Promise<void>
}
