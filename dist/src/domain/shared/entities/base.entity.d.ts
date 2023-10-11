import { EntityId } from './entity-id.value-object';
export declare abstract class BaseEntity<T> {
    private _id;
    protected props: T;
    get id(): EntityId;
    protected constructor(props: T, id?: EntityId);
    equals(entity: BaseEntity<T>): boolean;
}
