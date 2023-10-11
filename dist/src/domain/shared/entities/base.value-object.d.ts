export declare abstract class BaseValueObject<T> {
    protected props: T;
    protected constructor(props: T);
    equals(valueObject: BaseValueObject<T>): boolean;
}
