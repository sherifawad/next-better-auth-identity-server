import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const serverEnv = createEnv({
	server: {
		ISSUER: z.string().url(),
		BETTER_AUTH_URL: z.string().url(),
		BETTER_AUTH_SECRET: z.string().min(1),
		CLIENT_ID: z.string().min(1),
		CLIENT_SECRET: z.string(),
		SCOPES: z.string().min(1),
	},
	experimental__runtimeEnv: process.env,
});
