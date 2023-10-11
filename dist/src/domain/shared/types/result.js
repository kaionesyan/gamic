"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
var Result;
(function (Result) {
    function ok(value) {
        return {
            value,
            isOk: true,
            isErr: false,
        };
    }
    Result.ok = ok;
    function err(value) {
        return {
            value,
            isOk: false,
            isErr: true,
        };
    }
    Result.err = err;
})(Result || (exports.Result = Result = {}));
//# sourceMappingURL=result.js.map