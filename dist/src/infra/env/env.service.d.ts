import { ConfigService, PathValue } from '@nestjs/config';
import { Env } from './env';
export declare class EnvService {
    private configService;
    constructor(configService: ConfigService<Env, true>);
    get<T extends keyof Env>(key: T): PathValue<Env, T>;
}
