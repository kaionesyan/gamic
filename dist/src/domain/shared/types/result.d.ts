type Ok<O> = {
    value: O;
    isOk: true;
    isErr: false;
};
type Err<E> = {
    value: E;
    isOk: false;
    isErr: true;
};
export declare namespace Result {
    function ok<O>(value: O): Ok<O>;
    function err<E>(value: E): Err<E>;
}
export type Result<E, O> = Ok<O> | Err<E>;
export {};
