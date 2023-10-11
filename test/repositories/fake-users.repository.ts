import { User } from '@/domain/users/entities/user.entity'
import { UsersRepository } from '@/domain/users/repositories/users/users.repository'

export class FakeUsersRepository implements UsersRepository {
  public items: User[] = []

  async findByEmail(email: string): Promise<User | null> {
    return this.items.find((item) => item.email === email) || null
  }

  async findByGamerTag(gamerTag: string): Promise<User | null> {
    return this.items.find((item) => item.gamerTag.value === gamerTag) || null
  }

  async create(user: User): Promise<void> {
    this.items.push(user)
  }

  async save(user: User): Promise<void> {
    const index = this.items.findIndex((item) => item.id.equals(user.id))

    this.items[index] = user
  }

  async delete(user: User): Promise<void> {
    const index = this.items.findIndex((item) => item.id.equals(user.id))

    this.items.splice(index, 1)
  }
}
