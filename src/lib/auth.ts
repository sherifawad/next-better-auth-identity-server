import { serverEnv } from "@/env/server";
import { sharedEnv } from "@/env/shared";
import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { genericOAuth } from "better-auth/plugins";

export const auth = betterAuth({
	plugins: [
		nextCookies(),
		genericOAuth({
			config: [
				{
					providerId: sharedEnv.NEXT_PUBLIC_PROVIDER_ID,
					clientId: serverEnv.CLIENT_ID,
					clientSecret: serverEnv.CLIENT_SECRET,
					discoveryUrl: `${serverEnv.ISSUER}/.well-known/openid-configuration`,
					scopes: serverEnv.SCOPES.split(" "),
					pkce: true,
				},
			],
		}),
	],
});
