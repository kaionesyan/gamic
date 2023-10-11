import { BaseValueObject } from '@/domain/shared/entities/base.value-object'

export interface GamerTagProps {
  value: string
}

export class GamerTag extends BaseValueObject<GamerTagProps> {
  get value(): string {
    return this.props.value
  }

  static create(value: string): GamerTag {
    const isValid = value.match(/^[a-zA-Z]{4,12}$/i)

    if (!isValid) {
      throw new Error('Invalid Gamer Tag')
    }

    return new GamerTag({
      value,
    })
  }
}
