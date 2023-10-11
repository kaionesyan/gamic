export declare enum DomainErrorCode {
    EmailInUse = "EmailInUse",
    GamerTagInUse = "GamerTagInUse"
}
export declare class DomainError extends Error {
    code: DomainErrorCode;
    static emailInUse: (email: string) => DomainError;
    static gamerTagInUse: (gamerTag: string) => DomainError;
    protected constructor(code: DomainErrorCode, message: string);
}
