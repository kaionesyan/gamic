export declare abstract class HashService {
    abstract hash(plain: string): string;
    abstract compare(plain: string, hashed: string): boolean;
}
