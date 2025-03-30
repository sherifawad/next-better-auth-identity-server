import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const sharedEnv = createEnv({
	shared: {
		NEXT_PUBLIC_BASE_URL: z.string().url(),
		NEXT_PUBLIC_PROVIDER_ID: z.string().min(1),
	},
	runtimeEnv: {
		NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
		NEXT_PUBLIC_PROVIDER_ID: process.env.NEXT_PUBLIC_PROVIDER_ID,
	},
});
