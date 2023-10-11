"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseValueObject = void 0;
class BaseValueObject {
    props;
    constructor(props) {
        this.props = props;
    }
    equals(valueObject) {
        if (valueObject === this)
            return true;
        return JSON.stringify(this.props) === JSON.stringify(valueObject.props);
    }
}
exports.BaseValueObject = BaseValueObject;
//# sourceMappingURL=base.value-object.js.map