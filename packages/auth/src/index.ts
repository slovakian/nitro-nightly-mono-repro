import { tanstackStartCookies } from 'better-auth/tanstack-start';
import { env } from "@nitro-mono/env/server";
import { betterAuth } from "better-auth";

export const auth = betterAuth({
  database: "", // Invalid configuration
  trustedOrigins: [env.CORS_ORIGIN],
  emailAndPassword: {
    enabled: true,
  },
  plugins: [tanstackStartCookies()]
});
