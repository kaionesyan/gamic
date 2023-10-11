"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
const entity_id_value_object_1 = require("./entity-id.value-object");
class BaseEntity {
    _id;
    props;
    get id() {
        return this._id;
    }
    constructor(props, id) {
        this.props = props;
        this._id = id ?? entity_id_value_object_1.EntityId.create();
    }
    equals(entity) {
        if (entity === this)
            return true;
        if (entity._id.equals(this._id))
            return true;
        return false;
    }
}
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=base.entity.js.map