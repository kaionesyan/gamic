import { BaseValueObject } from '@/domain/shared/entities/base.value-object';
export interface GamerTagProps {
    value: string;
}
export declare class GamerTag extends BaseValueObject<GamerTagProps> {
    get value(): string;
    static create(value: string): GamerTag;
}
