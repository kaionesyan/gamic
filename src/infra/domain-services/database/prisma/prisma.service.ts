import { DatabaseService } from '@/domain/shared/services/database/database.service'
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaDatabaseService
  extends DatabaseService
  implements OnModuleInit, OnModuleDestroy
{
  public client = new PrismaClient({
    log: ['error'],
  })

  connect(): Promise<void> {
    return this.client.$connect()
  }

  disconnect(): Promise<void> {
    return this.client.$disconnect()
  }

  onModuleInit(): Promise<void> {
    return this.connect()
  }

  onModuleDestroy(): Promise<void> {
    return this.disconnect()
  }
}
