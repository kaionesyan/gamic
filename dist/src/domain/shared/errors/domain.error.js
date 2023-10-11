"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainError = exports.DomainErrorCode = void 0;
var DomainErrorCode;
(function (DomainErrorCode) {
    DomainErrorCode["EmailInUse"] = "EmailInUse";
    DomainErrorCode["GamerTagInUse"] = "GamerTagInUse";
})(DomainErrorCode || (exports.DomainErrorCode = DomainErrorCode = {}));
class DomainError extends Error {
    code;
    static emailInUse = (email) => {
        return new DomainError(DomainErrorCode.EmailInUse, `The email "${email}" is already in use`);
    };
    static gamerTagInUse = (gamerTag) => {
        return new DomainError(DomainErrorCode.GamerTagInUse, `The gamer tag "${gamerTag}" is already in use`);
    };
    constructor(code, message) {
        super(message);
        this.code = code;
    }
}
exports.DomainError = DomainError;
//# sourceMappingURL=domain.error.js.map