import { randomUUID } from 'node:crypto'
import { BaseValueObject } from './base.value-object'

export interface EntityIdProps {
  value: string
}

export class EntityId extends BaseValueObject<EntityIdProps> {
  get value(): string {
    return this.props.value
  }

  static create(value?: string): EntityId {
    if (!value) {
      return new EntityId({
        value: randomUUID(),
      })
    }

    const isUuid = value.match(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    )

    if (!isUuid) {
      throw new Error('Invalid UUID')
    }

    return new EntityId({
      value,
    })
  }
}
