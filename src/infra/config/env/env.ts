import { z } from 'zod'

export const envSchema = z.object({
  // App Config
  PORT: z.coerce.number().int().default(3000),
})

export type Env = z.infer<typeof envSchema>
