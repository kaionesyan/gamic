import { BaseValueObject } from './base.value-object';
export interface EntityIdProps {
    value: string;
}
export declare class EntityId extends BaseValueObject<EntityIdProps> {
    get value(): string;
    static create(value?: string): EntityId;
}
