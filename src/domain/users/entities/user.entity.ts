import { BaseEntity } from '@/domain/shared/entities/base.entity'
import { EntityId } from '@/domain/shared/entities/entity-id.value-object'

export interface UserProps {
  email: string
  passwordHash: string
  gamerTag: string
}

export class User extends BaseEntity<UserProps> {
  get email(): string {
    return this.props.email
  }

  set email(value: string) {
    this.props.email = value
  }

  get passwordHash(): string {
    return this.props.passwordHash
  }

  set passwordHash(value: string) {
    this.props.passwordHash = value
  }

  get gamerTag(): string {
    return this.props.gamerTag
  }

  set gamerTag(value: string) {
    this.props.gamerTag = value
  }

  static create(props: UserProps, id?: EntityId): User {
    return new User(props, id)
  }
}
