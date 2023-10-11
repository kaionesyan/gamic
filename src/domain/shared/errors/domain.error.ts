export enum DomainErrorCode {
  EmailInUse = 'EmailInUse',
  GamerTagInUse = 'GamerTagInUse',
}

export class DomainError extends Error {
  public code: DomainErrorCode

  static emailInUse = (email: string): DomainError => {
    return new DomainError(
      DomainErrorCode.EmailInUse,
      `The email "${email}" is already in use`,
    )
  }

  static gamerTagInUse = (gamerTag: string): DomainError => {
    return new DomainError(
      DomainErrorCode.GamerTagInUse,
      `The gamer tag "${gamerTag}" is already in use`,
    )
  }

  protected constructor(code: DomainErrorCode, message: string) {
    super(message)
    this.code = code
  }
}
