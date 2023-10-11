import { User } from '../../entities/user.entity';
export declare abstract class UsersRepository {
    abstract findByEmail(email: string): Promise<User | null>;
    abstract findByGamerTag(gamerTag: string): Promise<User | null>;
    abstract create(user: User): Promise<void>;
    abstract save(user: User): Promise<void>;
    abstract delete(user: User): Promise<void>;
}
