import { clientEnv } from "@/env/client";
import { createAuthClient } from "better-auth/react";
import { genericOAuthClient } from "better-auth/client/plugins";
export const { signIn, signUp, signOut, useSession, oauth2 } = createAuthClient({
	baseURL: clientEnv.NEXT_PUBLIC_BASE_URL,
	plugins: [genericOAuthClient()],
});
