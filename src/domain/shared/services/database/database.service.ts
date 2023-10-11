export abstract class DatabaseService {
  abstract connect(): Promise<void>
  abstract disconnect(): Promise<void>
}
