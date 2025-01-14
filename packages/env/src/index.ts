import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
	server: {
		NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
		GOOGLE_API_KEY: z.string(),
		OPENAI_API_KEY: z.string().optional(),
		CLOUDFLARE_ACCOUNT_ID: z.string(),
		CLOUDFLARE_ACCESS_KEY_ID: z.string(),
		CLOUDFLARE_SECRET_ACCESS_KEY: z.string(),
	},
	runtimeEnvStrict: {
		NODE_ENV: process.env.NODE_ENV,
		GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
		OPENAI_API_KEY: process.env.OPENAI_API_KEY,
		CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID,
		CLOUDFLARE_ACCESS_KEY_ID: process.env.CLOUDFLARE_ACCESS_KEY_ID,
		CLOUDFLARE_SECRET_ACCESS_KEY: process.env.CLOUDFLARE_SECRET_ACCESS_KEY,
	},
})

export type Env = typeof env
