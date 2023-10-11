import { BaseEntity } from '@/domain/shared/entities/base.entity';
import { EntityId } from '@/domain/shared/entities/entity-id.value-object';
import { GamerTag } from './gamer-tag.value-object';
export interface UserProps {
    email: string;
    passwordHash: string;
    gamerTag: GamerTag;
}
export declare class User extends BaseEntity<UserProps> {
    get email(): string;
    set email(value: string);
    get passwordHash(): string;
    set passwordHash(value: string);
    get gamerTag(): GamerTag;
    set gamerTag(value: GamerTag);
    static create(props: UserProps, id?: EntityId): User;
}
