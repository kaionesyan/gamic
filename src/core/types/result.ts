type Ok<O> = {
  value: O
  isOk: true
  isErr: false
}

type Err<E> = {
  value: E
  isOk: false
  isErr: true
}

export namespace Result {
  export function ok<O>(value: O): Ok<O> {
    return {
      value,
      isOk: true,
      isErr: false,
    }
  }

  export function err<E>(value: E): Err<E> {
    return {
      value,
      isOk: false,
      isErr: true,
    }
  }
}

export type Result<E, O> = Ok<O> | Err<E>
