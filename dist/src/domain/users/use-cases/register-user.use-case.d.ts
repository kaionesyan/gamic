import { DomainError } from '@/domain/shared/errors/domain.error';
import { Result } from '@/domain/shared/types/result';
import { User } from '../entities/user.entity';
import { HashService } from '@/domain/shared/services/hash/hash.service';
import { UsersRepository } from '../repositories/users/users.repository';
type Request = {
    email: string;
    password: string;
    gamerTag: string;
};
type Response = Result<DomainError, {
    user: User;
}>;
export declare class RegisterUserUseCase {
    private usersRepository;
    private hashService;
    constructor(usersRepository: UsersRepository, hashService: HashService);
    execute(data: Request): Promise<Response>;
}
export {};
