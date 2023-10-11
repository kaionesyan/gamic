export enum DomainErrorCode {}

export class DomainError extends Error {
  public code: DomainErrorCode

  protected constructor(code: DomainErrorCode, message: string) {
    super(message)
    this.code = code
  }
}
