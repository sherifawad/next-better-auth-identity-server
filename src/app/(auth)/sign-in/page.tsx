"use client";

import { Button } from "@/components/ui/button";
import { sharedEnv } from "@/env/shared";
import { signIn } from "@/lib/auth-client";
import React from "react";

export default function SignIn() {
	const handleLogin = async () => {
		signIn.oauth2({
			providerId: sharedEnv.NEXT_PUBLIC_PROVIDER_ID,
			callbackURL: `${sharedEnv.NEXT_PUBLIC_BASE_URL}/dashboard`,
		});
	};
	return <Button onClick={() => handleLogin()}>Sign In</Button>;
}
