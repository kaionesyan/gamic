"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const base_entity_1 = require("../../shared/entities/base.entity");
class User extends base_entity_1.BaseEntity {
    get email() {
        return this.props.email;
    }
    set email(value) {
        this.props.email = value;
    }
    get passwordHash() {
        return this.props.passwordHash;
    }
    set passwordHash(value) {
        this.props.passwordHash = value;
    }
    get gamerTag() {
        return this.props.gamerTag;
    }
    set gamerTag(value) {
        this.props.gamerTag = value;
    }
    static create(props, id) {
        return new User(props, id);
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map