import { EntityId } from './entity-id.value-object'

export abstract class BaseEntity<T> {
  private _id: EntityId
  protected props: T

  get id(): EntityId {
    return this._id
  }

  protected constructor(props: T, id?: EntityId) {
    this.props = props
    this._id = id ?? EntityId.create()
  }

  public equals(entity: BaseEntity<T>): boolean {
    if (entity === this) return true

    if (entity._id.equals(this._id)) return true

    return false
  }
}
