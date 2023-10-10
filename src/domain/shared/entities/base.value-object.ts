export abstract class BaseValueObject<T> {
  protected props: T

  protected constructor(props: T) {
    this.props = props
  }

  public equals(valueObject: BaseValueObject<T>): boolean {
    if (valueObject === this) return true

    return JSON.stringify(this.props) === JSON.stringify(valueObject.props)
  }
}
