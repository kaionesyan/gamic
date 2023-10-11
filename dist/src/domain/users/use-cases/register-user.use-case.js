"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserUseCase = void 0;
const domain_error_1 = require("../../shared/errors/domain.error");
const result_1 = require("../../shared/types/result");
const user_entity_1 = require("../entities/user.entity");
const gamer_tag_value_object_1 = require("../entities/gamer-tag.value-object");
class RegisterUserUseCase {
    usersRepository;
    hashService;
    constructor(usersRepository, hashService) {
        this.usersRepository = usersRepository;
        this.hashService = hashService;
    }
    async execute(data) {
        const { email, password, gamerTag } = data;
        const emailInUse = await this.usersRepository.findByEmail(email);
        if (emailInUse) {
            return result_1.Result.err(domain_error_1.DomainError.emailInUse(email));
        }
        const gamerTagInUse = await this.usersRepository.findByGamerTag(gamerTag);
        if (gamerTagInUse) {
            return result_1.Result.err(domain_error_1.DomainError.gamerTagInUse(gamerTag));
        }
        const user = user_entity_1.User.create({
            email,
            passwordHash: this.hashService.hash(password),
            gamerTag: gamer_tag_value_object_1.GamerTag.create(gamerTag),
        });
        return result_1.Result.ok({ user });
    }
}
exports.RegisterUserUseCase = RegisterUserUseCase;
//# sourceMappingURL=register-user.use-case.js.map