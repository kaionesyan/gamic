"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityId = void 0;
const node_crypto_1 = require("node:crypto");
const base_value_object_1 = require("./base.value-object");
class EntityId extends base_value_object_1.BaseValueObject {
    get value() {
        return this.props.value;
    }
    static create(value) {
        if (!value) {
            return new EntityId({
                value: (0, node_crypto_1.randomUUID)(),
            });
        }
        const isUuid = value.match(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
        if (!isUuid) {
            throw new Error('Invalid UUID');
        }
        return new EntityId({
            value,
        });
    }
}
exports.EntityId = EntityId;
//# sourceMappingURL=entity-id.value-object.js.map