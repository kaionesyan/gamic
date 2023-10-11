"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamerTag = void 0;
const base_value_object_1 = require("../../shared/entities/base.value-object");
class GamerTag extends base_value_object_1.BaseValueObject {
    get value() {
        return this.props.value;
    }
    static create(value) {
        const isValid = value.match(/^[a-zA-Z]{4,12}$/i);
        if (!isValid) {
            throw new Error('Invalid Gamer Tag');
        }
        return new GamerTag({
            value,
        });
    }
}
exports.GamerTag = GamerTag;
//# sourceMappingURL=gamer-tag.value-object.js.map