import { sharedEnv } from "@/env/shared";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function GET() {
	const result = await auth.api.signInWithOAuth2({
		body: {
			providerId: sharedEnv.NEXT_PUBLIC_PROVIDER_ID,
			callbackURL: `${sharedEnv.NEXT_PUBLIC_BASE_URL}/dashboard`,
		},
	});

	redirect(result.url);

	return new Response(JSON.stringify("ok"), { status: 200 });
}
